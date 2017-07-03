import React from 'react';
import { Link, Redirect ,hashHistory} from 'react-router-dom';
import { Form, Input } from 'formsy-react-components';
import { connect } from 'react-redux';
import { dbConfig } from '../../../../services/PouchDb.js';
import { updateUserName } from '../../../../actions/actions.js';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.changeHandler = this.changeHandler.bind(this);
    this.submit  = this.submit.bind(this);
    this.state = {
      user: {}
    }
  }
  
  changeHandler(event) {
    console.log('change');
  }
  
  submit(user) {
    console.log(user);
      var parentInstance = this;
      dbConfig.getData(user.email).then(function(doc){
        console.log(doc.model);
        if(doc.obj.email == user.email && doc.obj.password == user.password) {
          console.log(user.email);
           parentInstance.props.dispatch(updateUserName(user.email));
           parentInstance.props.history.push("/users");
        } else {
           alert("Email or password do not match");
        }
          
    });
  }
  
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-3 col-xs-6">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group text-right">
                <Link to="/register"> Click To Register</Link>
              </div>
              <Form onValidSubmit={this.submit} noValidate>
                <Input name="email" label="Email" onChange={this.changeHandler} validations="isEmail" validationError="email is not valid" required/>
                <Input name="password" type="password" label="password" onChange={this.changeHandler} validations={{minLength: 8}} validationErrors={{minLength: 'password must be 8 characters'}} required/>
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
const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
export default connect(mapStateToProps)(Login);