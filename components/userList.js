import React from 'react';
import {DB} from '../app.js';
export default class UserList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        data :[]
    };
  }
 
  componentDidMount() {
    var _this = this;
    var userArray = [];
    DB.allDocs({
      include_docs: true,
      attachments: true
    }, function(err, response) {
      if (err) { 
        return console.log(err);
      }else {
        console.log(response.rows);
        for(var i=0; i<response.rows.length; i++) {
            var row = response.rows[i];
            var obj = {id: i, 'firstName': "ABC", lastName: "XYZ", email: row.doc.model.email, phoneNumber: row.doc.model.phone, doa: '27/10/2018'};
            userArray.push(obj);
        }
        _this.setState({data: userArray});
      }
    });
      
  }
  render() {
      var list = this.state.data.map(p =>{
           return (
                <tr key={p.id}>
                     {Object.keys(p).filter(k => k !== 'id').map(k => {
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