import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';

// Imports sorted according to Router match
import Index from '../pages/Index'
import LoginAction from './LoginAction';
import PrivateRoute from './PrivateRoute';
import TodoApp from './TodoApp';

class App extends Component {
  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <div>
          <h1>todos</h1>
          <Index />
          <Route path="/login" component={LoginAction}/>
          <PrivateRoute path="/todos" component={TodoApp}/>
        </div>
      </ConnectedRouter>
    );
  }
}

export default App;
