import moment from 'moment';

const defaultFilterState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
}
export default (state = defaultFilterState, {
  type,
  text,
  startDate,
  endDate
} = {}) => {
  switch (type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text
      }
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate
      }
    default:
      return state
  }
}