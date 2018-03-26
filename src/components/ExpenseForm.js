import React from 'react';
import { addExpense } from '../actions/expenses'
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {
  state = {
    description: '',
    amount: '',
    note: '',
    createdAt: moment(),
    calendarFocused: false,
    error: ''
  }
  dispatch = this.props.dispatch;

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onAmountChange = e => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onNoteChange = e => {
    const note = e.target.value;
    this.setState(() => ({ note }))
  }
  onDateChange = createdAt => {
    createdAt &&
      this.setState(() => ({ createdAt }))
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = e => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({
        error: 'Please provide description and amount'
      }))
    } else {
      this.setState(() => ({ error: '' }))
    }
    !this.state.error && this.dispatch(
      addExpense({
        description: this.state.description,
        note: this.state.note,
        amount: this.state.amount,
        createdAt: this.state.createdAt
      })
    )
  }
  render() {
    return (
      <div className='Expense-Form'>

        {!!this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input type="text"
            placeholder='Description'
            onChange={this.onDescriptionChange}
            autoFocus
          />
          <input type="text"
            value={this.state.amount}
            onChange={this.onAmountChange}
            placeholder='Amount'
          />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea name="" id="" cols="30" rows="10"
            placeholder='Add a note for your expense(optional)'
            onChange={this.onNoteChange}
          ></textarea>
          <button>Add Expense</button>
        </form>
      </div >
    )
  }
}