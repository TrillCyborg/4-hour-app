import { combineReducers } from 'redux';
import App from './App';
import Todo from './Todo';

export default combineReducers({
  app: App,
  todo: Todo,
});
