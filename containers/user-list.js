import React from 'react';
import { dbConfig } from '../services/pouch-db.js';
import { store } from '../store.js';
export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.changeClick = this.changeClick.bind(this);
    this.state = {
      data :[]
    };
  }
 
  componentWillMount() {
  }
  
  componentDidMount() {
    var parentInstance = this;
    var userArray = [];
    if(store.getState().username.role == 'admin') {
      dbConfig.getAllData().then(function(userData) {
        for(var i = 2; i < userData.rows.length; i++) {
          var row = userData.rows[i].doc.obj;
          userArray.push(row);
        }
        parentInstance.setState({data: userArray});
      });
    }else {
      dbConfig.findByRole('user').then(function(doc) {
        for(var i = 0; i < doc.docs.length; i++) {
          var row = doc.docs[i].obj;
          userArray.push(row);
        }
        parentInstance.setState({data: userArray});
      });
    }
  }
  
  changeClick(event) {
      var parentInstance = this;
      dbConfig.findByEmail(event.target.value).then(function(doc) {
        var user = doc.docs[0];
        dbConfig.removeDoc(user).then(function(result) {
          parentInstance.componentDidMount();
        });
      });
  }
  
  render() {
      var list = this.state.data.map(p => {
        return (
          <tr key={ Math.random()}>
            {Object.keys(p).filter(k => k !== 'c_password' && k !== 'password' && k !== 'file').map(k => {
              return (<td className="text-center" key={ Math.random()}>{p[k]}</td>);
            })}
            {store.getState().username.role == "admin"? <td className="text-center"><button className="btn btn-primary" onClick={this.changeClick} value={p['email']}>Delete</button></td>: null }
          </tr>
        );
      });
    return (
      <div className="table-responsive">
        <h3>Register users list</h3>
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">FirstName</th>
              <th className="text-center">LastName</th>
              <th className="text-center">Email</th>
              <th className="text-center">Phone no</th>
              <th className="text-center">Date Of Joining</th>
              <th className="text-center">Role</th>
            {store.getState().username.role == "admin"? <th className="text-center">Action</th>: null }
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
      </div>
    );
  }
}