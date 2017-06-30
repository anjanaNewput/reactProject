import React from 'react';
import { Link, Redirect ,hashHistory} from 'react-router-dom';
import {Form, Input} from 'formsy-react-components';
import {DB} from '../app.js';

export default class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.changeHandler = this.changeHandler.bind(this);
    this.submit  = this.submit.bind(this);
    this.state = {
      user: {}
    }
  }
  
  changeHandler(evnet) {
    console.log('change');
  }
  checkLogin(userList, user) {
      for(var i=0; i< userList.length; i++) {
          if(userList[i].email == user.email) {
              return true;
          } else {
              return false;
          }
      }
  }
  submit(user) {
      var _this = this;
      DB.get('users', function(err, doc) {
           if (err) { 
             return console.log(err);
         } else {
             if(_this.checkLogin(doc.data, user)) {
                 _this.props.history.push("/users");
             }
             alert("user is not registerd. please register yourself first");
             _this.props.history.push("/login");
             
         }
     });
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