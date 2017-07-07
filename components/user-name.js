import React from 'react';
import { store } from '../store.js';
export const UserName = ((props) => {
  return (
    <li className="dropdown">
      <a href="#"  className="dropdown-toggle" data-toggle="dropdown">{props.username? props.username.obj.email: null}</a>
      <ul id="dropdown-menu" className="dropdown-menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li className="divider"></li>
        <li><a href="#">Separated link</a></li>
        <li className="divider"></li>
        <li><a href="#">One more separated link</a></li>
      </ul>
    </li>
  );
});
