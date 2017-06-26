import React from 'react';
import { Link } from 'react-router-dom';

export default class RegisterUser extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <div className="row">
            <div className="col-xs-12">
              <form className="form-horizontal">
                <div className="form-group">
                  <Link className="btn btn-default" to="/login">Back To LogIn</Link>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword2">Confirm Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword2" placeholder="Confirm Password"/>
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone No.</label>
                  <input type="text" className="form-control" id="phone" placeholder="Mobile No"/>
                </div>
                <div className="form-group">
                  <input type="submit" value="Registration" className="btn btn-default"/>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}