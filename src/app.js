import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import store from './store/configureStore'
import { setExpenses, startSetExpenses } from './actions/expenses';
import { login, logout } from './actions/auth'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { firebase } from './firebase/firebase';

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

let hasRendered = false;
const renderApp = () => {
  ReactDOM.render(app, document.getElementById('root'))
  hasRendered = true;
}

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    ReactDOM.render(<p>...Loading</p>, document.getElementById('root'));
    store.dispatch(startSetExpenses())
      .then(() => {
        renderApp();
        (history.location.path == '/') && history.push('/dashboard')
      })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/')
  }
})