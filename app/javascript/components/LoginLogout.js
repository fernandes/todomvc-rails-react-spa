import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  NavLink
} from 'rebass';

const LoginLogout = ({ history, auth, logout }) => (
  auth.isAuthenticated ? (
    <NavLink onClick={() => {
      logout(() => history.push('/'))
    }}>Logout</NavLink>
  ) : (
    <NavLink is={Link} to={'/login'} children={'Login'} />
  )
)

export default LoginLogout;
