import React from 'react';
import { store } from '../store.js';
export const UserName = ((props) => {
  return (
    <li>
      <a>{props.user}</a>
    </li>
  );
});
