import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Input, File, Select} from 'formsy-react-components';
import Formsy from "formsy-react";
import { dbConfig } from '../services/pouch-db.js';

export default class RegisterUser extends React.Component {
  
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  
  submit(model){
    var _this = this;
    var reader = new FileReader();
    dbConfig.getData(model.email).then(function(doc) {
      if(doc) {
        alert('User already registered');
      }
    }).catch(function(err) {
      
    reader.onload = function() {
      var data = reader.result.split(',');
      dbConfig.putData(model, data[1]).then(function(doc) {
        if(doc) {
          alert('User registered successfully');
          _this.props.history.push('/login');
        }
      });
    };
    reader.readAsDataURL(model.file[0]);
    });
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
                  <Input name="password" type="password" label="Password" validations="minLength:8" validationErrors={{minLength:'Password must have 8 characters'}} placeholder="Password" required/>
                </div>
                <div className="form-group">
                  <Input name="c_password" type="password" label="Confirm Password" validations="equalsField:password" validationError="Password does not match"  placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                  <Input name="phone" label="Phone No." validations="isNumeric,isLength:10" validationErrors={{isNumeric:"Enter only digit", isLength:"Phone No. should be 10 digit"}}type="text" className="form-control" id="phone" placeholder="Phone No" required/>
                </div>
                <div className="form-group">
                  <Input name="doj" label="Date of Joining" type="date" className="form-control" id="doj" required/>
                </div>
                <div className="form-group">
                  <Select name="role" label="Role" className="form-control" id="role" options={[{value: 'admin', label: 'Admin'}, { value: 'user', label: 'User'}]} required>
                  </Select>
                </div>
                <div className="form-group">
                  <File className="form-control" name="file" id="file" accept="image/*" />
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