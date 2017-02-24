import React from 'react';
import Header from './components/Header';
import './App.css'

const App = (props) => (
    <main className="app">
        <Header />
        <div className="container">
            {props.children}
        </div>
    </main>
);

export default App;
