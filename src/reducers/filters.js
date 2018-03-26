const defaultFilterState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
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
                startDate
            }
        case 'SET_START_DATE':
            return {
                ...state,
                endDate
            }
        default:
            return state
    }
}