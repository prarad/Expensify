import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  }
  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }))
  }
  render() {
    return (
      <div className="ExpenseListFilters">

        <div className="textFilter">
          <label htmlFor="text-filter">Filter By Text: </label>
          <input
            id="text-filter"
            type="text"
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value))
            }} />
        </div>

        <div className="sort-by-filter">
          <label htmlFor="sort-by-filter">Sort By: </label>
          <select
            name="sort-by"
            id="sort-by-filter"
            value={this.props.filters.sortBy}
            onChange={e => {
              this.props.dispatch(
                e.target.value === 'date' ?
                  this.props.dispatch(sortByDate()) :
                  this.props.dispatch(sortByAmount())
              )
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>

          {this.props.filters.sortBy === 'date' &&
            (
              <DateRangePicker
                startDate={this.props.filters.startDate}
                startDateId='start-date-id'
                endDate={this.props.filters.endDate}
                endDateId='end-date-id'
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
              />
            )
          }
        </div>

      </div>
    )
  }
}
const mapStateToProps = state => ({ filters: state.filters })

export default connect(mapStateToProps)(ExpenseListFilters)