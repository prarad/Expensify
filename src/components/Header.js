import React from 'react';
import { NavLink } from 'react-router-dom';

const navStyle = {
  active: {
    backgroundColor: '#f33',
    color: '#eee',
    textDecoration: 'none',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px auto',
    fontSize: '1.5em',
    color: 'purple',
    textAlign: 'center'
  }
}
export default () => (
  <header>
    <h1>Expensify</h1>
    <nav style={navStyle.container}>
      <NavLink to="/" activeStyle={navStyle.active} exact={true}>Dashboard</NavLink>
      <NavLink to="/create" activeStyle={navStyle.active}>Create Expense</NavLink>
      <NavLink to="/help" activeStyle={navStyle.active}>Help</NavLink>
    </nav>
  </header>
);