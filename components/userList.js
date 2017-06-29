import React from 'react';

export default class UserList extends React.Component {
  //var users = [];
  constructor(props){
    super(props);
    this.state = {
        data :[
          {'id':1,'firstName':'Anjana', 'lastName':'Singh', 'email':'anjana@newput.com','phoneNumber':'9827290856', 'doa':'1/2/2016'},
          {'id':2,'firstName':'John', 'lastName':'Deo', 'email':'jhon@gmail.com','phoneNumber':'1234567889', 'doa':'2/5/2016'},
          {'id':3,'firstName':'Alan', 'lastName':'Mak', 'email':'alan@gmail.com','phoneNumber':'9988776655', 'doa':'13/7/2015'},
          {'id':4,'firstName':'Bill', 'lastName':'Tani', 'email':'bill@newput.com','phoneNumber':'4433221166', 'doa':'5/10/2014'},
          {'id':5,'firstName':'Polina', 'lastName':'Matvikoch', 'email':'polina@newput.com','phoneNumber':'4433556688', 'doa':'3/2/2017'}
        ]
    };
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