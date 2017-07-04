import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store.js';
export class Logout extends React.Component {
  logout() {
    store.getState().username = null;
  }
  render() {
    return (
        <Link to="/login" onClick={() => this.logout()}><span className="glyphicon glyphicon-log-out"></span>LogOut</Link>
    );
  }
}