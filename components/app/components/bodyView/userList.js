import React from 'react';
import { dbConfig } from '../../../../services/PouchDb.js';
export default class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        data :[]
    };
  }
 
  componentDidMount() {
    var parentInstance = this;
    var userArray = [];
    dbConfig.getAllData().then(function(userData){
      console.log(userData.rows);
      for(var i = 0; i < userData.rows.length; i++) {
        var row = userData.rows[i].doc.obj;
        userArray.push(row);
      }
      console.log(userArray);
      parentInstance.setState({data: userArray});
    });
    
  }
  render() {
      var list = this.state.data.map(p =>{
        console.log(p);
        return (
          <tr key={Math.random()}>
            {Object.keys(p).filter(k => k !== 'c_password' && k !== 'password').map(k => {
              return (<td className="text-center" key={Math.random()}>{p[k]}</td>);
            })}
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