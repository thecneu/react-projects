import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import Add from './components/Add'
import List from './components/List'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Add}></Route>
            <Route path="/list" component={List}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
)
