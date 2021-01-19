import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clientReducer from '../features/client/clientSlice';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';

const middlewares = [logger]

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    client: clientReducer
  },
},
applyMiddleware(...middlewares));

export const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
