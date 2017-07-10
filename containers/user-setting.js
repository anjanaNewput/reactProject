import React from 'react';
import { Link } from 'react-router-dom';
import { store } from '../store.js';
import { Logout } from '../components/logout.js';
import { ChangePassword } from '../components/change-password.js';
import {ChangePasswordModal} from '../components/change-password-modal.js';
import { dbConfig } from '../services/pouch-db.js';

export class UserSettings extends React.Component {
  constructor(props) {
    super(props);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      modalIsOpen: false
    };
  }
  
  modalOpen() {
    this.setState({
      modalIsOpen: true
    });
  }
  
  modalClose() {
    this.setState({modalIsOpen: false});
  }
  
  changePassword() {
    this.modalOpen();
  }
  
  logout() {
    store.getState().user = null;
  }
  
  submit(model) {
    this.updatePassword(model);
  }
  
  updatePassword(model) {
    var parentInstance = this;
    var updateObj = store.getState().user.user.obj;
    updateObj['password'] = model.newpassword;
    dbConfig.findByEmail( store.getState().user.user.obj.email).then(function (doc) {
      dbConfig.db.put({
        _id: doc.docs[0]._id,
        _rev: doc.docs[0]._rev,
        obj: updateObj,
      }).then(function (result) {
        parentInstance.modalClose();
      });
    });
  }
  
  render() { 
    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown"><i className="fa fa-cog fa-2x" aria-hidden="true"></i></a>
        <ul id="dropdown-menu" className="dropdown-menu">
          <li><ChangePassword changePassword={this.changePassword} open={this.state.modalIsOpen} close={this.modalClose}/></li>
          <li><a>Edit</a></li>
          <li><Logout logout={this.logout}/></li>
        </ul>
        <ChangePasswordModal open={this.state.modalIsOpen} modalClose={this.modalClose} submit={this.submit}/>
      </li>
    );
  }
}