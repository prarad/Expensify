import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, removeExpense, editExpense, history, expense = expenses[2];

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    removeExpense={removeExpense}
    editExpense={editExpense}
    history={history}
    expense={expense}
  />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle edit expense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith({ id: expense.id, updates: expense })
});

test('should handle remove expense correctly', () => {
  wrapper.find('button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(removeExpense).toHaveBeenLastCalledWith(expense.id);
});