import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginView from '../../views/Pages/Login/Login'

class Login extends Component {
  handleLoginClick = () => {
    this.props.location.pathname.push('/dashboard')
  }

  render() {
    return <LoginView onLoginClick={this.handleLoginClick} />
  }
}

export default connect()(Login)
