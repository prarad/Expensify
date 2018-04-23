import React from 'react';
import uuid from 'uuid'
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setEndDate, setStartDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calenderFocused: null
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = calenderFocused => {
    this.setState(() => ({ calenderFocused }))
  }
  onTextChange = e => {
    this.props.setTextFilter(e.target.value)
  }
  onSortChange = e => {
    e.target.value === 'date' ?
      this.props.sortByDate() :
      this.props.sortByAmount()
  }
  render() {
    return (
      <div className="container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              value={this.props.filters.text}
              onChange={this.onTextChange}
              placeholder="Search expenses"
            />
          </div>
          <div className="input-group__item">
            <select
              name="sort-by"
              className="select"
              value={this.props.filters.text}
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            {this.props.filters.sortBy === 'date' &&
              (
                <DateRangePicker
                  id='date-range-picker'
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
      </div>
    )
  }
}
const mapStateToProps = state => ({ filters: state.filters })
const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount())
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)