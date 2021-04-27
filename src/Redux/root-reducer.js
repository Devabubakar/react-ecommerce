import { combineReducers } from 'redux';
import userReducer from './UserReducer/user-reducer';
import cartReducer from './cartReducer/cartReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import directoryReducer from './DirectoryReducer/directory-reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
