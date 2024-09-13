
import { applyMiddleware, legacy_createStore } from 'redux';
import persistedReducer from './reducers/rootReducer';
import { persistStore } from 'redux-persist';
import { thunk } from 'redux-thunk';
import customLoggerMiddleware from './customLoggerMiddleware';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = legacy_createStore(
  persistedReducer,

  composeWithDevTools( applyMiddleware(thunk,customLoggerMiddleware) )
);

const persistor = persistStore(store);



export { store, persistor };


