import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFiltrs';

export default () => (
  <div className="ExpenseDashboardPage">
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)