import { userTypes } from './user.types';
export const setCurrentUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});

export const googleSignInStart = () => ({
  type: userTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = (emailAndPassword) => ({
  type: userTypes.EMAIL_SIGNIN_START,
  payload: emailAndPassword,
});
export const signInSuccess = (user) => ({
  type: userTypes.SIGNIN_SUCCESS,
  payload: user,
});
export const signInFailure = (error) => ({
  type: userTypes.SIGNIN_FAILURE,
  payload: error,
});
