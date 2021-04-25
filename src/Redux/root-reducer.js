import { combineReducers } from 'redux';
import userReducer from './UserReducer/user-reducer';

export default combineReducers({
    user:userReducer
})
