import React from 'react';
import ReactDOM from 'react-dom';
import debounce from 'debounce';
import configureStore from './store/configureStore';

// const state = JSON.parse(localStorage.getItem('state'));
// const store = configureStore(state);
const store = configureStore();

const Root = require('./Root').default;

const render = (Component) => {
  ReactDOM.render(<Component store={store} />, document.getElementById('root'));
};

if (module.hot) {
  module.hot.accept('./Root', () => {
    const newApp = require('./Root').default;
    render(newApp);
  });
}

const saveState = debounce(() => {
  localStorage.setItem('state', JSON.stringify(store.getState()));
}, 1000);
store.subscribe(() => {
  saveState();
  render(Root);
  if (process.env.ENV === 'development') {
    console.log('state', store.getState());
  }
});
store.dispatch({ type: 'APP_INIT', store });
