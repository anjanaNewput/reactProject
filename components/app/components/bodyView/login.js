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
      var _this = this;
      dbConfig.getData(user.email).then(function(doc){
        if(doc.model.email == user.email && doc.model.password == user.password) {
           _this.props.dispatch(updateUserName(user.email));
           _this.props.history.push("/users");
        } else {
           alert("Email or password do not match");
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
const mapStateToProps = (state) => {
  return {
    username: state.username,
  };
};
export default connect(mapStateToProps)(Login);