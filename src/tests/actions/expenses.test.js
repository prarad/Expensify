import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import { database } from 'firebase';

const createMockStore = configureMockStore([thunk])

test('should setup Remove action object', () => {
  const res = removeExpense('432fdssf');
  expect(res).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '432fdssf'
  })
})

test('should make an edit action', () => {
  expect(editExpense({
    id: '343424afd',
    updates: { note: 'New note value' }
  })).toEqual({
    type: 'EDIT_EXPENSE',
    id: '343424afd',
    updates: { note: 'New note value' }
  })
})

test('should setup add expense action object with provided values', () => {
  expect(addExpense(expenses[2])).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  };

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseDate)
    done()
  })
})

// i think this test is not necessary
test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    descriptoin: '',
    amount: 0,
    note: '',
    createdAt: 0
  }

  store.dispatch(startAddExpense()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
  }).then(snapshot => {
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
})