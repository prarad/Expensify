import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses'

export const ExpenseList = props => (
  <div className="container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
    <div className="list-body">
      {props.expenses.length === 0 ? (
        <div className="list-item list-item--message">
          <span>No Expenses</span>
        </div>
      ) : (
          props.expenses.map(expense => (
            <ExpenseListItem {...expense} key={expense.id} />
          )))
      }
    </div>
  </div>
)

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters)
})

export default connect(mapStateToProps)(ExpenseList)