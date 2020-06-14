import {createStore, applyMiddleware} from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import reduxThunk from 'redux-thunk';
import rootReducer from '../reducers';
import listedproduct from '../assets/products.json';

// const initialState = {
//   productList: jsonProductList
// };

export default function configureStore() {
  console.log("OOOooo~!@#$%^"+JSON.stringify(listedproduct) );
 // console.log('initialstate',initialState);
    return createStore(rootReducer,initialState, applyMiddleware(reduxThunk, reduxImmutableStateInvariant())
  );
} 

