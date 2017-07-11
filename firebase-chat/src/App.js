import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import LoginForm from './components/LoginForm'
import ChatUI from './components/ChatUI'

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <div className="container">
          <div className="content">
            {this.props.loggedIn ? <ChatUI /> : <LoginForm />}
          </div>
        </div>
      </main>
    )
  }
}

const mapStateToProps = ({ user }) => ({
  loggedIn: user.authorized
})

export default connect(mapStateToProps)(App)
