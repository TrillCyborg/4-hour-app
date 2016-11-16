import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import reducers from '../reducers';

export default (initialState) => {
  return createStore(reducers, initialState, applyMiddleware(Thunk));
};
