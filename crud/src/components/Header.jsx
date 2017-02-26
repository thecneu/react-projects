import React from 'react'
import { Link } from 'react-router'
import logo from '../logo.svg'

const Header = () => (
  <header>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to the Crud</h2>
        <nav>
          <button><Link to="/">Home</Link></button>
          <button><Link to="admin">Admin</Link></button>
        </nav>
      </div>

  </header>
)

export default Header