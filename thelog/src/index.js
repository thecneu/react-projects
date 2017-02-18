import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Add from './components/Add'
import List from './components/List'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/"  component={App}>
            <IndexRoute component={Add}></IndexRoute>
            <Route path="list" component={List}></Route>
        </Route>
    </Router>,
    document.getElementById('root')
)
