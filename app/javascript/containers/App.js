import React, { Component } from 'react';
import PrivateRoute from './PrivateRoute';
import Index from '../pages/Index'
import LoginAction from './LoginAction';
import Public from '../pages/Public';

import { ConnectedRouter } from 'react-router-redux';
import TodoApp from '../components/TodoApp';

import {
  Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <Index />
          <Route path="/public" component={Public}/>
          <Route path="/login" component={LoginAction}/>
          <PrivateRoute path="/todos" component={TodoApp}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
