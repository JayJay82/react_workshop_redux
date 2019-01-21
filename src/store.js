import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootreducer';
import promiseMiddleware from 'redux-promise';

export default function configureStore() {
 return createStore(
  rootReducer,
   applyMiddleware(promiseMiddleware)
 );
}