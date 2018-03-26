import React from 'react';
import { removeExpense } from '../actions/expenses';
import { connect } from 'react-redux';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div className='Item'>
        <h2>Description: {description}</h2>
        <p>Amount: {amount}</p>
        {createdAt && <p>Created At: {createdAt}</p>}
        <button
            onClick={() => { dispatch(removeExpense(id)) }}
        >Remove</button>
    </div>
)

export default connect()(ExpenseListItem);