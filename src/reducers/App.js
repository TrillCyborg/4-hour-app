import { app as appActions } from '../actions/Types';

const initState = {
  title: '4 Hour App',
  isDrawerOpen: false,
};

const appReducer = (state = initState, action) => {
  switch (action.type) {
    case appActions.toggleDrawer:
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen,
      };
    case appActions.setTitle:
      return {
        ...state,
        title: action.value,
      };
    default:
      return state;
  }
};

export default appReducer;
