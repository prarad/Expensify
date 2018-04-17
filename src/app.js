import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore'
import { setExpenses, startSetExpenses } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'react-dates/lib/css/_datepicker.css'
import './firebase/firebase'
import { firebase } from './firebase/firebase';

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  <p>...Loading</p>,
  document.getElementById('root')
)

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    app,
    document.getElementById('root')
  )
})