import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter, ModalClose} from 'react-modal-bootstrap';
import {Form, Input, File, Select} from 'formsy-react-components';
import Formsy from "formsy-react";
export const UpdateModal= ((props) => {
  console.log('modal props');
  console.log(props);
    return (
      <Modal 
        isOpen = { props.open } 
        contentLabel = "Modal" 
        keyboard = {false}
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
            Modal title
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>Modal Body</p>
          { props.user ?
            <Form  noValidate>
              <div className="form-group">
                <Input name="firstname" label="First Name" placeholder="First Name"  value={props.user.obj.firstname} required/>
              </div>
              <div className="form-group">
                <Input name="lastname" label="Last Name" placeholder="Last Name"  value={props.user.obj.lastname} required/>
              </div>
              <div className="form-group">
                <Input name="phone" label="Phone No."  value={props.user.obj.phone} validations="isNumeric,isLength:10" validationErrors={{isNumeric:"enter only digit", isLength:"Phone No. should be 10 digit"}}type="text" className="form-control" id="phone" placeholder="Phone No" required/>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary pull-right">Registration</button>
              </div>
            </Form> : null
          }
        </ModalBody>
        <ModalFooter>
          <button onClick={props.modalClose}>Close </button>
        </ModalFooter>
      </Modal>
    );
});