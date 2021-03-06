import { userTypes } from './user.types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
  signUpFailure,
  signUpSuccess,
} from './user.actions';

export function* getUserSnapshot(userAuth, additionaldata) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionaldata
    );
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

// sign in with google sign in pop up from firebase

export function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGoogle);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

//sign in with email and password
export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onEmailSignIn() {
  yield takeLatest(userTypes.EMAIL_SIGNIN_START, emailSignIn);
}

//check user session persistance
export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshot(userAuth);
  } catch (error) {
    yield signInFailure(error);
  }
}
export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

//signs out the current user

export function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (error) {
    yield signOutFailure(error);
  }
}

export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_START, signOut);
}

// sign up

export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccess({ user, displayName }));
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

export function* onSignUp() {
  yield takeLatest(userTypes.SIGN_UP_START, signUp);
}

export function* signInAfterSignUp({ payload: { user, displayName } }) {
  yield getUserSnapshot(user, displayName);
}
export function* onSignInAfterSignUp() {
  yield takeLatest(userTypes.SIGN_UP_SUCCCESS, signInAfterSignUp);
}

export function* usersagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
    call(onSignOut),
    call(onSignUp),
    call(onSignInAfterSignUp),
  ]);
}

// //const { user } = await auth.createUserWithEmailAndPassword(
//   this.state.email,
//   this.state.password
// );

// const {displayName} = this.state

// await createUserProfileDocument(user, {displayName});
// this.setState({
//   displayName: '',
//   email: '',
//   password: '',
//   passwordConfirm: '',
// });
