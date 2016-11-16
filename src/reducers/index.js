import { combineReducers } from 'redux';

const appReducer = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  app: appReducer,
});
