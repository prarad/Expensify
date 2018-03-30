console.log('hello from app.js')
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)