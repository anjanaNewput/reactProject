import React from 'react';
export class UserName extends React.Component {
  render() {
    return (
            <span>{this.props.username}</span>
    );
  }
}