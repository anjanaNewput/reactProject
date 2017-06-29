import React from 'react';
import { Link } from 'react-router-dom';
import {Form, Input} from 'formsy-react-components';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.state = {
      user: {}
    }
  }
  
  changeHandler(evnet) {
    console.log('change');
  }
  
  submit(data) {
    console.log(data);
    window.location = '/users';
  }
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group text-right">
                <Link to="/register"> Click To Register</Link>
              </div>
              <Form onValidSubmit={this.submit} noValidate>
                <Input name="email" label="Email" onChange={this.changeHandler} validations="isEmail" validationError="email is not valid" required/>
                <Input name="password" label="password" onChange={this.changeHandler} validations={{minLength: 8}} validationErrors={{minLength: 'password must be 8 characters'}} required/>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary pull-right">LogIn</button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}