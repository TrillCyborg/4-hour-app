import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'debounce';
import configureStore from './store/configureStore';

const state = JSON.parse(localStorage.getItem('state'));
const store = configureStore(state || {});

const App = require('./App').default;

const render = (Component) => {
  ReactDOM.render(<Component {...store} />, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./App', () => {
    const newApp = require('./App').default;
    render(newApp);
  });
}

const saveState = debounce(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
}, 1000);
store.subscribe(() => {
  saveState();
  render(App);
  if (process.env.ENV === 'development') {
    console.log('state', store.getState());
  }
});
store.dispatch({ type: 'APP_INIT', store });
