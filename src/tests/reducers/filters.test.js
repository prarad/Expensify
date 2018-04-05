import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import filtersReducer from '../../reducers/filters';
import moment from 'moment';

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}

test('should setup default filter values', () => {
  expect(
    filtersReducer(undefined, { type: '@@INIT' }
    )).toEqual({
      ...defaultFilterState
    })
});

test('should set text filter', () => {
  const text = 'test'
  expect(
    filtersReducer(undefined, setTextFilter(text))
  ).toEqual({
    ...defaultFilterState,
    text
  })
})

test('should set startDate filter', () => {
  const startDate = moment(0).subtract(4, 'day')
  expect(
    filtersReducer(undefined, setStartDate(startDate))
  ).toEqual({
    ...defaultFilterState,
    startDate
  })
})
test('should set endDate filter', () => {
  const endDate = moment(0).subtract(10, 'day')
  expect(
    filtersReducer(undefined, setEndDate(endDate))
  ).toEqual({
    ...defaultFilterState,
    endDate
  })
})
test('should set sortBy to amount', () => {
  expect(
    filtersReducer(undefined, sortByAmount())
  ).toEqual({
    ...defaultFilterState,
    sortBy: 'amount'
  })
})
test('should set sortBy to date', () => {
  expect(
    filtersReducer({ ...defaultFilterState, sortBy: 'amount' }, sortByDate())
  ).toEqual({
    ...defaultFilterState,
    sortBy: 'date'
  })
})