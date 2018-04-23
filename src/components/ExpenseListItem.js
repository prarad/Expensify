import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export default ({ id, description, amount, createdAt }) => (
  <Link to={`edit/${id}`} className="list-item">
    <div>
      <h2>{description}</h2>
      <span>
        {moment(createdAt).format('MMMM Do, YYYY')}
      </span>
    </div>
    <h3>
      {numeral(amount / 100).format('$0,0.00')}
    </h3>
  </Link>
)