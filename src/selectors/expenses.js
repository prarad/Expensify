import moment from 'moment';

export default (expenses, {
  text,
  sortBy,
  startDate,
  endDate
}) => {
  return expenses.filter(expense => {
    const createdAtMoment = moment(expense.createdAt);
    const words = expense.description.split(' ')
      .map(word => word.toLowerCase());
    const textMatch = !text || words.includes(text.toLowerCase());
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;

    return textMatch && startDateMatch && endDateMatch
  }).sort((a, b) => (
    sortBy === 'date' ?
      a.createdAt < b.createdAt :
      a.amount < b.amount
  ))
}