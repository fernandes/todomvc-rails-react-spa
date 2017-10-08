// Check https://github.com/redux-saga/redux-saga/issues/280
// for any doubt on this regenerator-runtime import
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from '../containers/App';

import store, { history } from '../reducers'

const rootEl = document.getElementById('todo')

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  rootEl
);
