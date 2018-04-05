import moment from 'moment';
import { setEndDate, setStartDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';

test('should generate, text filter action object', () => {
  expect(setTextFilter('some text')).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'some text'
  })
})
test('suold generate text filter action object with default value', () => {
  expect(setTextFilter()).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})
test('should generate end date action object', () => {
  expect(setEndDate(moment(0))).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  })
})
test('should generate end date action object', () => {
  expect(setStartDate(moment(0))).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  })
})
test('should generate sort by amount action object', () => {
  expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' })
})
test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' })
})