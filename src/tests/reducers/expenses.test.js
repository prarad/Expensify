import expensesReducer from '../../reducers/expenses';
import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
  expect(expensesReducer(undefined, { type: '@@INIT' })).toEqual([])
})
test('should add new expense', () => {
  const expense = {
    description: 'Gum',
    note: '',
    amount: 32.3,
    createdAt: 2000,
    id: '4234er4'
  }
  expect(
    expensesReducer(expenses,
      addExpense(expense)
    )).toEqual([
      ...expenses,
      {...expense, id: expect.any(String)}
    ])
})
test('should remove an expense by id', () => {
  expect(
    expensesReducer(expenses,
      removeExpense('2')
    )
  ).toEqual([expenses[0], expenses[2]])
})
test('should edit an item', () => {
  const updates = {
    description: 'editExpense test case',
    note: 'some note',
    amount: 1000,
    createdAt: -2000
  }
  expect(
    expensesReducer(expenses,
      editExpense({ id: '1', updates })
    )).toEqual([
      { ...updates, id: expect.any(String) },
      ...expenses.splice(1)
    ])
})