import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const middleware = [thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
