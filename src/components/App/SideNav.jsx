import React, { PropTypes } from 'react';
import { AppBar, Drawer, MenuItem } from 'material-ui';

const SideNav = ({ open, setRoute }) => (
  <Drawer open={open}>
    <AppBar />
    <MenuItem onTouchTap={() => setRoute('/todo', 'Todo')}>Todo</MenuItem>
    <MenuItem onTouchTap={() => setRoute('/morning', 'Morning Routine')}>Morning Routine</MenuItem>
    <MenuItem onTouchTap={() => setRoute('/dreamline', 'Dreamline')}>Dreamline</MenuItem>
    <MenuItem onTouchTap={() => setRoute('/friends', 'Top 5 Friends')}>Top 5 Friends</MenuItem>
    <MenuItem onTouchTap={() => setRoute('/pomodoro', 'Pomodoro Timer')}>Pomodoro</MenuItem>
    <MenuItem onTouchTap={() => setRoute('/settings', 'Settings')}>Settings</MenuItem>
  </Drawer>
);

SideNav.propTypes = {
  open: PropTypes.bool.isRequired,
  setRoute: PropTypes.func.isRequired,
};

export default SideNav;
