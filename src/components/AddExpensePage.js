import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = ({ dispatch, id }) => (
  <div className='AddExpensePage'>
    <h1>Add Expense</h1>
    <ExpenseForm dispatch={dispatch} />
  </div>
)

const mapStateToProps = state => ({ ...state.expenses })
export default connect(mapStateToProps)(AddExpensePage)