import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const expenseWordGenerator = base => base === 1 ? 'expense' : 'exepenses';

export const ExpensesSummary = ({ expensesCount, expensesTotal, hiddenExpenses }) => {
  const expenseWord = expenseWordGenerator(expensesCount);
  const hiddenExpenseWord = expenseWordGenerator(hiddenExpenses);
  const expensesTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00')
  return (
    <div className='page-header'>
      <div className="container">
        <h1 className="page-header__title">Viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{expensesTotalFormatted}</span></h1>
        {!!hiddenExpenses && <h4 className="page-header__subtitle">{`${hiddenExpenses} hidden ${hiddenExpenseWord}`}</h4>}
        <div className="page-header__actions">
          <Link className="btn" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expensesCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    hiddenExpenses: state.expenses.length - visibleExpenses.length,
  }
}

export default connect(mapStateToProps)(ExpensesSummary)