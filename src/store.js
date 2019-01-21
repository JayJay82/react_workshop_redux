import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootreducer';

export default function configureStore() {
 return createStore(
  rootReducer,
   applyMiddleware()
 );
}