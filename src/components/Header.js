import React from 'react';
import { NavLink } from 'react-router-dom';

export default () => (
  <header>
    <h1>Expensify</h1>
    <nav>
      <NavLink to="/" exact={true}>Dashboard</NavLink>
      <NavLink to="/create" >Create Expense</NavLink>
      <NavLink to="/help" >Help</NavLink>
    </nav>
  </header>
);