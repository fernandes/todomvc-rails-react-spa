import React from 'react'
import { Link } from 'react-router-dom'
import {
  Toolbar,
  NavLink,
  Text,
} from 'rebass'
import styled from 'styled-components'

import LoginLogout from '../components/LoginLogout'

const TodoBar = styled(Toolbar)`
  background-color: rgba(0, 0, 0, 0.3);
`
const Header = ({auth, logout}) => (
  <TodoBar>
    <NavLink is={Link} to={'/todos'} children={'Todos'} />
    <LoginLogout auth={auth} logout={logout} />
  </TodoBar>
)

export default Header;
