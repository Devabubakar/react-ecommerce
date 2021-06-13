import { userTypes } from './user.types';
export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGNIN_START,
});
export const googleSignInSuccess = (user) => ({
  type: userTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user,
});
export const googleSignInFailure = (error) => ({
  type: userTypes.GOOGLE_SIGNIN_FAILURE,
  payload: error,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userTypes.EMAIL_SIGNIN_START,
  payload : emailAndPassword
});
export const emailSignInSuccess = (user) => ({
  type: userTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user,
});
export const emailSignInFailure = (error) => ({
  type: userTypes.EMAIL_SIGNIN_FAILURE,
  payload: error,
});
