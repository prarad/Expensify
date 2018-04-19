import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history';
import Dashboard from '../components/ExpenseDashboardPage'
import Login from '../components/Login';
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import { PrivateRoute } from './PrivateRoute';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path='/' component={Login} exact />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <PrivateRoute path='/create' component={AddExpensePage} />
        <PrivateRoute path='/edit/:id' component={EditExpensePage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
)