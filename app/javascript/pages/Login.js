import React from 'react';
import { Field, reduxForm } from 'redux-form'
import { Input } from 'rebass'
import styled from 'styled-components'

import {
  Redirect
} from 'react-router-dom'

const customInput = field => {
  return (
    <Input
      {...field.input}
      style={{border: '1px solid rgba(0,0,0,.25)'}}
      type={field.type}
    />
  )
}

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(values, dispatch) {
    this.props.login(values.email, values.password)
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { isAuthenticated } = this.props.auth
    const { handleSubmit, pristine, reset, submitting } = this.props

    if (isAuthenticated) {
      return (
        <Redirect to={from.pathname}/>
      )
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
          <form onSubmit={handleSubmit(this.onSubmit)}>
            <div>
              <label>Email</label>
              <div>
                <Field
                  name="email"
                  component={customInput}
                  type="text"
                  placeholder="user@mail.com"
                />
              </div>
            </div>
            <div>
              <label>Password</label>
              <div>
                <Field
                  name="password"
                  component={customInput}
                  type="password"
                  placeholder=""
                />
              </div>
            </div>
            <div>
              <button type="submit" disabled={pristine || submitting}>
                Submit
              </button>
              <button type="button" disabled={pristine || submitting} onClick={reset}>
                Clear Values
              </button>
            </div>
          </form>
      </div>
    )
  }
}

// <button onClick={this.performLogin}>Log in</button>

export default reduxForm({
  form: 'login' // a unique identifier for this form
})(Login)
// export default Login;
