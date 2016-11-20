import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { AppBar } from 'material-ui';
import { hashHistory } from 'react-router';
import { toggleDrawer, setTitle } from '../../actions';
import { SideNav } from './';

class App extends Component {
  constructor(props) {
    super(props);
    this.setRoute = this.setRoute.bind(this);
  }

  setRoute(route, title) {
    this.props.setTitle(title);
    hashHistory.push(route);
  }

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={this.props.toggleDrawer}
          style={{ zIndex: 9999 }}
        />
        <SideNav open={this.props.isDrawerOpen} setRoute={this.setRoute} />
        <div style={{ marginLeft: this.props.isDrawerOpen ? 256 : 0 }}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  title: state.app.title,
  isDrawerOpen: state.app.isDrawerOpen,
});

export default connect(mapStateToProps, { toggleDrawer, setTitle })(App);
