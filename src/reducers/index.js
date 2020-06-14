import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import authReducer from './authenticationReducer';
import userReducer from './userReducer';
import ProductReducer from './ProductReducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  user: userReducer,
  productList: ProductReducer
});

export default rootReducer;
