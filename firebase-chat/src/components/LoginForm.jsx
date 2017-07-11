import React, { Component } from 'react'
import Input from './Input'

class LoginForm extends Component {
  state = {
    name: '',
    avatar: 'account_box'
  }

  onChange = (e) => {
    const el = e.currentTarget
    this.setState({
      [el.name]: el.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    const data = {
      name: this.state.name,
      avatar: this.state.avatar
    }

    this.props.logIn(data)
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <Input name="name" placeholder="Name" value={this.state.name} onChange={this.onChange} />
        <Input name="avatar" placeholder="Avatar" value={this.state.avatar} onChange={this.onChange} />
        <button type="submit">Log In</button>
      </form>
    )
  }
}

export default LoginForm