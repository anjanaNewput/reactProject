import React from 'react';
import { Link } from 'react-router-dom';

import { store } from '../store.js';

export const ChangePassword = ((props) => {
  console.log(props);
  return (
    <a onClick={() =>  props.changePassword() }> Change Password </a>
  );
});