import React from 'react';
import { connect } from 'react-redux';
import { editExpense, removeExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense({
      id: this.props.expense.id,
      updates: expense
    });
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.removeExpense(this.props.expense.id)
    this.props.history.push('/')
  }
  render() {
    return ( < div className='AddExpensePage' >
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
  removeExpense: id => dispatch(removeExpense(id)),
  editExpense: (id, expense) => dispatch(editExpense({ id, updates: expense }))
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)