import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './components/App';
import Todo from './components/Todo';

const NoMatch = () => (
  <h1>404 Not Found</h1>
);

const Routes = () => (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Todo} />
      <Route path="todo" component={Todo} />
      <Route path="*" component={NoMatch} />
    </Route>
  </Router>
);

export default Routes;
