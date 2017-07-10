import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store.js';

export const Logout = ((props) => {
  return (
    <Link to="/login" onClick={() => props.logout()}><span className="glyphicon glyphicon-log-out"></span>LogOut</Link>
  );
});