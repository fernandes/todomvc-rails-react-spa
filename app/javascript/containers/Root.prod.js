import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

export default class Root extends Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  }
}
