console.log('hello from app.js')
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore'
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'

store.dispatch(addExpense({
  description: 'this is me from the future test',
  note: 'future test',
  amount: 2,
  createdAt: 1371
}))
store.dispatch(addExpense({
  description: 'this is some test info about expense',
  note: 'some note',
  amount: 0,
  createAt: 2018
}));
store.dispatch(addExpense({
  description: 'this is me :)',
  note: 'just a guy',
  amount: 4,
  createdAt: 1992
}))
store.dispatch(addExpense({
  description: 'this is me from the future test',
  note: 'future test',
  amount: 1,
  createdAt: 2000
}))

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
)