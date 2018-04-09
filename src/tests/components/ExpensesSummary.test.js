import React from 'react';
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render ExpensesSumarry with 1 expenes', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={39} />)
  expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSumarry with multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expensesCount={3} expensesTotal={31396} />)
  expect(wrapper).toMatchSnapshot()
})