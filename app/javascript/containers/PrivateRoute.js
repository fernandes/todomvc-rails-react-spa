import React from 'react';
import { connect } from 'react-redux';

import {
  Route,
  Redirect
} from 'react-router-dom'

const mapStateToProps = state => {
  return {
    auth: state.auth,
    router: state.router
  }
}

const PrivateRouteRaw = ({ auth, router, component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: router.location }
      }}/>
    )
  )}/>
)

const PrivateRoute = connect(
  mapStateToProps
)(PrivateRouteRaw)

export default PrivateRoute;
