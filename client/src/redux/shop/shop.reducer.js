import { shopTypes } from './shop.types';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
};

export const shopInitialState =  INITIAL_STATE

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case shopTypes.FETCH_COLLECTIONS_STARTS:
      return {
        ...state,
        isFetching: true,
        errorMessage: undefined,
      };

    case shopTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        isFetching: false,
      };
    case shopTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
