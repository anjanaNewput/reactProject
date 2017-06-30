import React from 'react';
import {store} from '../app.js';
export class UserName extends React.Component {
  render() {
    return (
        <a>{store.getState().username ? store.getState().username.username :null}</a>
    );
  }
}