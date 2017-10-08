import { connect } from 'react-redux'
import Header from '../pages/Header'
import { actionLogout } from '../actions'

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
