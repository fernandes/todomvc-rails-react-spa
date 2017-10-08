import { connect } from 'react-redux'
import { actionLogin, actionLogout } from '../actions'
import Login from '../pages/Login'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) => {
      dispatch(actionLogin(username, password))
    },
    logout: () => {
      dispatch(actionLogout())
    }
  }
}

const LoginAction = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginAction
