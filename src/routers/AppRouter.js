import React from 'react'
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history';
import Dashboard from '../components/ExpenseDashboardPage'
import Login from '../components/Login';
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

export default () => (
  <Router history={history}>
    <Switch>
      <PublicRoute path='/' component={Login} exact />
      <PrivateRoute path='/dashboard' component={Dashboard} />
      <PrivateRoute path='/create' component={AddExpensePage} />
      <PrivateRoute path='/edit/:id' component={EditExpensePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Router>
)