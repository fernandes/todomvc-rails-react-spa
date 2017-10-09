import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  NavLink
} from 'rebass';

const LoginLogout = ({ history, auth, logout }) => (
  auth.isAuthenticated ? (
    <NavLink ml='auto' onClick={() => {
      logout(() => history.push('/'))
    }}>Logout</NavLink>
  ) : (
    <NavLink ml='auto' is={Link} to={'/login'} children={'Login'} />
  )
)

export default LoginLogout;
