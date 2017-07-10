import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter, ModalClose} from 'react-modal-bootstrap';
import {Form, Input, File, Select} from 'formsy-react-components';
import Formsy from "formsy-react";

import { store } from '../store.js';
import '../assets/scss/model.scss';

export const ChangePasswordModal = ((props) => {
    return (
      <Modal 
        isOpen = { props.open } 
        contentLabel = "Modal" 
        style = {
          {
            content: { 
              width:'600px', 
              position: 'absolute',
              top: '15%',
              left: '25%',
              right: '25%',
              bottom: '15%',
            }
          }
        }>
        <ModalHeader>
          <ModalClose onClick={props.modalClose}/>
          <ModalTitle>
            Change Password
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
            <Form  onValidSubmit={props.submit} noValidate className="update-form">
              <div className="form-group">
                <Input name="newpassword" label="New Password" type="password" validations="minLength:8" validationErrors={{minLength:'Password must have 8 characters'}} placeholder="New password"  required/>
              </div>
              <div className="form-group">
                <Input name="newc_password" label="Confirm New Password" type="password" validations="equalsField:newpassword" validationError="Password does not match" placeholder="Confirm New Password" required/>
              </div>
              <div className="form-group hidden">
                <Input name="cu_password"  type="password" value={store.getState().user.user.obj.password} required/>
              </div>
              <div className="form-group">
                <Input name="current_password" label="CurrentPassword" type="password" validations="equalsField:cu_password" validationError="Current Password does not match" placeholder="Current Password" required/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary register-button">Save Change</button>
              </div>
            </Form>
        </ModalBody>
        <ModalFooter>
          <button onClick={props.modalClose} className="btn btn-warning">Close</button>
        </ModalFooter>
      </Modal>
    );
});