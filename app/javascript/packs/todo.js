require("react-hot-loader/patch")
// Check https://github.com/redux-saga/redux-saga/issues/280
// for any doubt on this regenerator-runtime import
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import { history } from '../config/configureStore'
import configureStore from "../config/configureStore"
import Root from '../containers/Root';

const rootEl = document.getElementById('todo')
const store = configureStore()

ReactDOM.render(
  <AppContainer>
    <Root history={history} store={store} />
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('../containers/Root', () => {
    const Root = require('../containers/Root').default;
    ReactDOM.render(
      <AppContainer>
        <Root history={history} store={store} />
      </AppContainer>,
      rootEl
    );
  });
}
