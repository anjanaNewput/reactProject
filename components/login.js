import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-xs-offset-4 col-xs-4">
          <div className="row">
            <div className="col-xs-12">
              <div className="form-group">
                <Link className="btn btn-default" to="/register"> Register</Link>
              </div>
              <form >
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon" htmlFor="username"><i className="fa fa-user" aria-hidden="true"></i> User Name</span>
                    <input type="text" className="form-control"  name="username"  placeholder="john"/>
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group">
                    <span className="input-group-addon" htmlFor="password"><i className="fa fa-key" aria-hidden="true"></i> Password</span>
                    <input type="password" className="form-control"  name="password"  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"/>
                  </div>
                </div>
                <input type="submit" value="LogIn" className="btn btn-default"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}