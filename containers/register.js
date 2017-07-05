import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Input, File} from 'formsy-react-components';
import Formsy from "formsy-react";
import { dbConfig } from '../services/pouch-db.js';

export default class RegisterUser extends React.Component {
  
  constructor(props) {
    super(props);
  }
  
  submit(model) {
    var reader = new FileReader();
    reader.onload = function() {
      var data = reader.result.split(',');
      dbConfig.putData(model, data[1]);
    };
    reader.readAsDataURL(model.file[0]);
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group text-right">
                <Link to="/login">Back To LogIn</Link>
              </div>
              <Form onValidSubmit={this.submit} noValidate>
                <div className="form-group">
                  <Input name="firstname" label="First Name" placeholder="First Name" value="" required/>
                </div>
                <div className="form-group">
                  <Input name="lastname" label="Last Name" placeholder="Last Name" value="" required/>
                </div>
                <div className="form-group">
                  <Input name="email" label="Email address" validations="isEmail" placeholder="Email" value="" required/>
                </div>
                <div className="form-group">
                  <Input name="password" type="password" label="Password" validations="minLength:8" validationErrors={{minLength:'password must be 8 characters'}} placeholder="Password" required/>
                </div>
                <div className="form-group">
                  <Input name="c_password" type="password" label="Confirm Password" validations="equalsField:password" validationError="password does not match"  placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                  <Input name="phone" label="Phone No." validations="isNumeric,isLength:10" validationErrors={{isNumeric:"enter only digit", isLength:"Phone No. should be 10 digit"}}type="text" className="form-control" id="phone" placeholder="Phone No" required/>
                </div>
                <div className="form-group">
                  <Input name="doj" label="Date of Joining" type="date" className="form-control" id="doj" required/>
                </div>
                <div className="form-group">
                  <File className="form-control" name="file" id="file" accept="application/pdf" />
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-primary pull-right">Registration</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}