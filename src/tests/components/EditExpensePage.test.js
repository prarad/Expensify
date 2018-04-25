import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, startRemoveExpense, startEditExpense, history, closeModal, openModal, expense = expenses[2];

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  closeModal = jest.fn();
  openModal = jest.fn();
  history = { push: jest.fn() }
  wrapper = shallow(<EditExpensePage
    startRemoveExpense={startRemoveExpense}
    startEditExpense={startEditExpense}
    history={history}
    expense={expense}
    closeModal={closeModal}
    openModal={openModal}
  />
  );
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle start edit expense correctly', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expense);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(startEditExpense).toHaveBeenLastCalledWith({ id: expense.id, updates: expense })
});

test('should handle start remove expense correctly', () => {
  wrapper.find('button').simulate('click');
  expect(openModal).toHaveBeenCalled();
});