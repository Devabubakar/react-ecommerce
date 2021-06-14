import { userTypes } from './user.types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import {
  emailSignInFailure,
  emailSignInSuccess,
  googleSignInFailure,
  googleSignInSuccess,
} from './user.actions';

export function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGoogle);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(googleSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignIn() {
  yield takeLatest(userTypes.GOOGLE_SIGNIN_START, googleSignIn);
}

export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(createUserProfileDocument, user);
    const snapshot = yield userRef.get();
    yield put(emailSignInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(emailSignInFailure(error));
  }
}

export function* onEmailSignIn() {
  yield takeLatest(userTypes.EMAIL_SIGNIN_START, emailSignIn);
}

export function* usersagas() {
  yield all([call(onGoogleSignIn), call(onEmailSignIn)]);
}
