import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Input} from 'formsy-react-components';
import Formsy from "formsy-react";

Formsy.addValidationRule('isEmpty', function(values, value, array) {
  
  return false;
});

export default class RegisterUser extends React.Component {
  
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);  
  }
  
  changeHandler(event) {
    console.log(event);
  }
  
  submit(model){
    console.log(model);
  
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
                  <Input name="email" label="Email address" onChange={this.changeHandler} validations="isEmail" placeholder="Email" value="" required/>
                </div>
                <div className="form-group">
                  <Input name="password" type="password" label="password" validations="minLength:8" validationErrors={{minLength:'password must be 8 characters'}} placeholder="Password" required/>
                </div>
                <div className="form-group">
                  <Input name="c_password" label="Confirm Password" validations="equalsField:password" validationError="password does not match" type="password" placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                  <Input name="phone" label="Phone No." type="text" className="form-control" id="phone" placeholder="Mobile No" required/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-default pull-right">Registration</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}