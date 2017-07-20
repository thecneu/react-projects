import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './components/Header'
import ChatUI from './containers/ChatUI'
import LoginForm from './containers/LoginForm'

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
