import { all, call, put, takeLatest } from 'redux-saga/effects';
import { userTypes } from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOut() {
  yield takeLatest(userTypes.SIGN_OUT_SUCCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOut)]);
}
