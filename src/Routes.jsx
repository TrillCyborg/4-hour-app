import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';

const NoMatch = () => (
  <h1>404 Not Found</h1>
);

const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default Routes;
