import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './App'
import Home from './containers/Home'
import Admin from './containers/Admin'
import NewEdit from './components/admin/NewEdit'

const Root = () => (
  <Router history={browserHistory}>
    <Route component={App}>
      <Route component={Home} path="/" />
      <Route component={Admin} path="admin">
        <Route path="edit/:id" component={NewEdit} />
        <Route path="new" component={NewEdit} />
      </Route>
    </Route>
  </Router>
)

export default Root
