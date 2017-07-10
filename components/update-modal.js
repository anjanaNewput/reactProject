import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter, ModalClose} from 'react-modal-bootstrap';
import {Form, Input, File, Select} from 'formsy-react-components';
import Formsy from "formsy-react";
import '../assets/scss/model.scss';
export const UpdateModal= ((props) => {
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
          <span>Update User Info</span>
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          { props.user ?
            <Form  noValidate className="update-form">
              <div className="form-group">
                <Input name="firstname" label="First Name" placeholder="First Name"  value={props.user.obj.firstname} required/>
              </div>
              <div className="form-group">
                <Input name="lastname" label="Last Name" placeholder="Last Name"  value={props.user.obj.lastname} required/>
              </div>
              <div className="form-group">
                <Input name="phone" label="Phone No." value={props.user.obj.phone} validations="isNumeric,isLength:10" validationErrors={{isNumeric:"Enter only digit", isLength:"Phone No. should be 10 digit"}}type="text" className="form-control" id="phone" placeholder="Phone No" required/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary register-button">Registration</button>
              </div>
            </Form> : null
          }
        </ModalBody>
        <ModalFooter>
          <button onClick={props.modalClose} className="btn btn-warning">Close</button>
        </ModalFooter>
      </Modal>
    );
});