import React from 'react';
import { connect } from 'react-redux';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';
import ConfirmationModal from '../components/ConfirmationModal';
import { openConfirmationModal } from '../actions/confirmationModal';

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense({
      id: this.props.expense.id,
      updates: expense
    });
    this.props.history.push('/')
  }
  onRemove = () => {
    this.props.openModal()
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
          <ConfirmationModal selectedExpense={this.props.expense} history={this.props.history} />
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
  openModal: () => dispatch(opennModal()),
  startEditExpense: ({ id, updates }) => dispatch(startEditExpense({ id, updates }))
})

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id)
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)