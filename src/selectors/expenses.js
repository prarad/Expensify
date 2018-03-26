export default (expenses, {
    text,
    sortBy,
    startDate,
    endDate
}) => {
    return expenses.filter(expense => {
        const words = expense.description.split(' ')
            .map(word => word.toLowerCase());
        const textMatch = !text || words.includes(text.toLowerCase());
        const startDateMatch = !startDate || startDate < expense.createdAt;
        const endDateMatch = !endDate || endDate > expense.createdAt;

        return textMatch && startDateMatch && endDateMatch
    }).sort((a, b) => (
        sortBy === 'date' ?
            a.createdAt < b.createdAt :
            a.amount < b.amount
    ))
}