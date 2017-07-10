import React from 'react';
import { store } from '../store.js';
export const UserName = ((props) => {
  return (
    <li className="dropdown">
      <a href="#">{props.username? props.username.obj.email: null}</a>
    </li>
  );
});
