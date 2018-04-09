import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFiltrs';
import ExpensesSummaray from './ExpensesSummary';

export default () => (
  <div className="ExpenseDashboardPage">
    <ExpensesSummaray />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
)