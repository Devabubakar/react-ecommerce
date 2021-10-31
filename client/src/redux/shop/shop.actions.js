import { shopTypes } from './shop.types';
import  { firestore , shopDataFromSnapshot } from '../../firebase/firebase.utils';

export const fetchCollectionsStarts = () => ({
  type: shopTypes.FETCH_COLLECTIONS_STARTS,
});

export const fetchCollectionsSuccess = (collections) => ({
  type: shopTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections,
});

export const fetchCollectionsError = (errorMessage) => ({
  type: shopTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsAsync = () => {
  return (dispatch) => {
    const collectionRef = firestore.collection('shop');
    dispatch(fetchCollectionsStarts());

    collectionRef
      .get()
      .then((snapshot) => {
        const collections = shopDataFromSnapshot(snapshot);

        dispatch(fetchCollectionsSuccess(collections));
      })
      .catch((error) =>
        dispatch(fetchCollectionsError('Error fetching Data', error))
      );
  };
};
