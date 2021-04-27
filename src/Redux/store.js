import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist'



export const store = createStore(rootReducer, applyMiddleware(logger));
export const persistor = persistStore(store)

// eslint-disable-next-line import/no-anonymous-default-export
export default {store, persistor};
