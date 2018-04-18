import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense({
      id: this.props.expense.id,
      updates: expense
    });
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.startRemoveExpense(this.props.expense.id)
    this.props.history.push('/')
  }
  render() {
    return (< div className='AddExpensePage' >
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={this.props.expense}
        onSubmit={this.onSubmit}
      />
      <button
        onClick={this.onRemove}
      >Remove</button>
    </div >
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
  startEditExpense: (id, expense) => dispatch(startEditExpense({ id, updates: expense }))
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)