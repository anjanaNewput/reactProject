import React from 'react';
export class UserName extends React.Component {
  render() {
    return (
        <a>{this.props.username}</a>
    );
  }
}