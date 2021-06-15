import { userTypes } from './user.types';
const INTIAL_STATE = {
  currentUser: null,
  error: null,
};

const userReducer = (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null, //  resets error to null after successfull sign in
      };
    case userTypes.SIGN_OUT_SUCCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case userTypes.SIGNIN_FAILURE:
    case userTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
