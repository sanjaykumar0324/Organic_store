
import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer';
import NavbarReducer from './navbarReducer';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  products: ProductReducer,
  navbar: NavbarReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
