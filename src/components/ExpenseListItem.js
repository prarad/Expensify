import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ({ id, description, amount, createdAt }) => (
  <div className='Item'>
    <Link to={`edit/${id}`} >
      <h2>{description}</h2>
    </Link>
    <p>{numeral(amount / 100).format('$0,0.00')}</p>
    {createdAt &&
      <p>{
        moment(createdAt).format('MMMM Do, YYYY')
      }</p>
    }
  </div>
)