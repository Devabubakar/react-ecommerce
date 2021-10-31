import { takeEvery, call, put } from 'redux-saga/effects';
import { firestore, shopDataFromSnapshot } from '../../firebase/firebase.utils';
import { fetchCollectionsError, fetchCollectionsSuccess } from './shop.actions';

import { shopTypes } from './shop.types';

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection('shop');
    const snapshot = yield collectionRef.get();
    const collections = yield call(shopDataFromSnapshot, snapshot);
    yield put(fetchCollectionsSuccess(collections));
  } catch (error) {
    yield put(fetchCollectionsError(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery(shopTypes.FETCH_COLLECTIONS_STARTS, fetchCollectionAsync);
}
