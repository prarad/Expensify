import React from 'react';
import { Link } from 'react-router-dom';

export default ({ id, description, amount, createdAt }) => (
  <div className='Item'>
    <Link to={`edit/${id}`} >
      <h2>{description}</h2>
    </Link>
    <p>{amount}</p>
    {createdAt && <p>{createdAt}</p>}
  </div>
)