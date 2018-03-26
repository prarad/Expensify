import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filters';

const defaultStyle = {
    container: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '50px',
        width: '700px',
        padding: '20px',
        margin: '10px auto',
        backgroundColor: '#eee',
        border: '2px solid #aaa'
    },
    indiBox: {
        display: 'flex',
        justifyContent: 'space-around',
        width: '300px',
    }
}
const ExpenseListFilters = ({ dispatch, text, sortBy }) => (
    <div className="ExpenseListFilters" style={defaultStyle.container}>

        <div className="textFilter" style={defaultStyle.indiBox}>
            <label htmlFor="text-filter">Filter By Text: </label>
            <input
                id="text-filter"
                type="text"
                value={text}
                onChange={e => {
                    dispatch(setTextFilter(e.target.value))
                }} />
        </div>

        <div className="sort-by-filter" style={defaultStyle.indiBox}>
            <label htmlFor="sort-by-filter">Sort By: </label>
            <select
                name="sort-by"
                id="sort-by-filter"
                value={sortBy}
                onChange={e => {
                    dispatch(
                        e.target.value === 'date' ?
                            dispatch(sortByDate()) :
                            dispatch(sortByAmount())
                    )
                }}
            >
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
        </div>

    </div>
)

const mapStateToProps = state => ({ ...state.filters })

export default connect(mapStateToProps)(ExpenseListFilters)