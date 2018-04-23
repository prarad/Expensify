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
    return (
      < div >
        <div className="page-header">
          <div className="container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button
            className="btn btn--secondary"
            onClick={this.onRemove}
          >Remove Expense</button>
        </div>
      </div >
    )
  }
}

const mapDispatchToProps = (dispatch, props) => ({
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
  startEditExpense: ({ id, updates }) => dispatch(startEditExpense({ id, updates }))
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)