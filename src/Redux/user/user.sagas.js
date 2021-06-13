import { userTypes } from './user.types';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  createUserProfileDocument,
  signInWithGoogle,
} from '../../firebase/firebase.utils';
import { googleSignInFailure, googleSignInSuccess } from './user.actions';

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

export function* usersagas() {
  yield all([call(onGoogleSignIn)]);
}
