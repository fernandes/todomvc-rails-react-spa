import React from 'react';

import {
  Link
} from 'react-router-dom';

import {
  Toolbar,
  NavLink,
  Text,
} from 'rebass';

import LoginLogout from '../components/LoginLogout'

const Header = ({auth, logout}) => (
  <Toolbar>
    <NavLink>
      Todos *{auth.username}*
    </NavLink>
    <NavLink ml='auto' is={Link} to={'/public'} children={'Public'} />
    <NavLink is={Link} to={'/todos'} children={'Todos'} />
    <Text> | </Text>
    <LoginLogout auth={auth} logout={logout} />
  </Toolbar>
)

export default Header;
