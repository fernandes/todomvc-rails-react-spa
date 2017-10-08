import {
  LOGIN_SUCCEEDED,
  LOGOUT_SUCCEEDED,
} from '../actions/types'

const authInitialState = {
  username: null,
  isAuthenticated: false
}

const Auth = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCEEDED:
      return { ...state, username: action.username, isAuthenticated: true }
    case LOGOUT_SUCCEEDED:
      return { ...state, username: null, isAuthenticated: false }
    default:
      return state
  }
}

export default Auth;
