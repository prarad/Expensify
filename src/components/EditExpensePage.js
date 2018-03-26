import React from 'react';
import { connect } from 'react-redux';
import { editExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const EditExpensePage = ({ disptach, description, note, amount, createdAt, id }) => {
    console.log(props);
    return (
        <div className='Edit-expense-page'>
            <button onClick={(e) => {

            }}
            >Update</button>
            <ExpenseForm />
        </div>
    );
};

const mapStateToProps = state => ({
    ...expenses
})

export default connect(mapStateToProps)(EditExpensePage)
