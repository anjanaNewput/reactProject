import React from 'react';
import { store } from '../store.js';
export const UserName = ((props) => {
  return (
    <a>{props.username? props.username.obj.email: null}</a>
  );
});
