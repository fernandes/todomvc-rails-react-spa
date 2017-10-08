import {
  LOGIN_REQUESTED,
  LOGOUT_REQUESTED
} from './types'

export const actionLogin = (username, password) => {
  return ({
    type: LOGIN_REQUESTED,
    username: username,
    password: password
  })
};

export const actionLogout = () => ({
  type: LOGOUT_REQUESTED
})
