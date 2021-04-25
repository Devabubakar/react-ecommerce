import { combineReducers } from 'redux';
import userReducer from './UserReducer/user-reducer';
import cartReducer from './cartReducer/cartReducer';

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
