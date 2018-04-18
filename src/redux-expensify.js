import { createStore, combineReducers } from 'redux';
const demoState = {
  expenses: [{
    id: uuid(),
    description: '',
    note: '',
    amount: 0,
    createdAt: undefined
  }],
  filters: {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }
};

store.subscribe(() => {
  let state = store.getState()
})
store.dispatch(addExpense({
  description: 'this is a',
  note: 'some note about expense',
  amount: 3,
  createdAt: 1999
}));
store.dispatch(addExpense({
  description: 'another test',
  note: 'some note',
  amount: 1,
  createdAt: 2012
}));
store.dispatch(addExpense({
  description: 'the last example',
  note: 'some note',
  amount: 1,
  createdAt: 2012
}));
store.dispatch(setTextFilter('test'))
