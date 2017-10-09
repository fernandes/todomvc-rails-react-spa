import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './App';

class Root extends Component {
  render() {
    const { history, store } = this.props;
    return (
      <Provider store={store}>
        <App history={history} />
      </Provider>
    );
  }
}

export default Root
