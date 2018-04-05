import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

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
  expect(addExpense({
    description: 'Rent',
    note: 'the rent of last month',
    createdAt: 1000,
    amount: 12331.42
  })).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: 'Rent',
      note: 'the rent of last month',
      createdAt: 1000,
      amount: 12331.42,
      id: expect.any(String)
    }
  })
})

test('should setup an add expense action object with default values', () => {
  expect(addExpense()).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: undefined,
      note: undefined,
      amount: 0,
      createdAt: 0,
      id: expect.any(String)
    }
  })
})