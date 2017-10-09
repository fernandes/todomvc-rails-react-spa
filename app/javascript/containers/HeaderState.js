import { connect } from 'react-redux'

import { actionLogout } from '../actions'
import Header from '../pages/Header'

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(actionLogout())
    }
  }
}

const HeaderState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)

export default HeaderState
