import { app } from './Types';

const toggleDrawer = () => ({ type: app.toggleDrawer });
const setTitle = title => ({ type: app.setTitle, value: title });

export {
  toggleDrawer,
  setTitle,
};
