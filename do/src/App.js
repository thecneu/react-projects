import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Do from './components/Do'
import ViewEntries from './components/ViewEntries'

class App extends Component {
  render() {
    return (
      <main className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to Do</h2>
        </header>

        <div className="app-body">
          <Do />
          <ViewEntries />
        </div>
      </main>
    );
  }
}

export default App;
