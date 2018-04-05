import moment from 'moment';
import selectExpenses from '../../selectors/expenses';
import expenses from '../fixtures/expenses';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
}
test('should filter by text value', () => {
  expect(selectExpenses(expenses, { ...filters, text: 'dinner' })).toEqual([
    expenses[2], expenses[1]
  ])
});
test('should filter by startDate', () => {
  expect(selectExpenses(expenses, { ...filters, startDate: moment(0) })).toEqual([
    expenses[2], expenses[0]
  ])
})
test('should filter by endDate', () => {
  expect(selectExpenses(expenses, { ...filters, endDate: moment(0).add(2, 'day') })).toEqual([
    expenses[0],
    expenses[1]
  ])
})
test('should sort by date', () => {
  expect(selectExpenses(expenses, filters)).toEqual([
    expenses[2],
    expenses[0],
    expenses[1]
  ])
})
test('should sort by amount', () => {
  expect(selectExpenses(expenses, { ...filters, sortBy: 'amount' })).toEqual([
    expenses[2],
    expenses[1],
    expenses[0]
  ])
})
