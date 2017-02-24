import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import Home from './containers/Home'
import Admin from './containers/Admin'

const Root = () => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route component={Home} path="/" />
      <Route component={Admin} path="admin">
        <Route path="edit" />
        <Route path="add" />
      </Route>
    </Route>
  </Router>
)

export default Root