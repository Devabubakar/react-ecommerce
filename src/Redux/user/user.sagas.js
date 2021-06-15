import { userTypes } from './user.types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  getCurrentUser,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { signInFailure, signInSuccess } from './user.actions';

export function* getUserRef(userAuth) {
  try {
    const userRef = yield call(createUserProfileDocument, userAuth);
    const snapshot = yield userRef.get();
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGoogle);
    yield getUserRef(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserRef(user);
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* onGoogleSignIn() {
  yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignIn);
}
export function* onEmailSignIn() {
  yield takeLatest(userTypes.EMAIL_SIGNIN_START, emailSignIn);
}

//check user session persistance
export function* checkUserSession() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserRef(userAuth);
  } catch (error) {
    yield signInFailure(error);
  }
}
export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, checkUserSession);
}

export function* usersagas() {
  yield all([
    call(onGoogleSignIn),
    call(onEmailSignIn),
    call(onCheckUserSession),
  ]);
}
