import React, { Component } from 'react';
import Cart from './containers/Cart';
import Product from './containers/Product';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Shopping Cart</h2>
        </div>
        <main>
          <Cart />
          <Product />
        </main>
      </div>
    );
  }
}

export default App;
