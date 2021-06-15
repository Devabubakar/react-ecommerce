import { all, call } from 'redux-saga/effects';
import { cartSagas } from './cart/cart.sagas';
import { fetchCollectionStart } from './shop/shop.sagas';
import { usersagas } from './user/user.sagas';

export default function* rootSaga() {
  yield all([call(fetchCollectionStart),call(usersagas),call(cartSagas)])
  
}
