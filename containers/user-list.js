import React from 'react';
import {Modal, ModalHeader, ModalBody, ModalTitle, ModalFooter, ModalClose} from 'react-modal-bootstrap';
import Confirm from 'react-confirm-bootstrap';
import { dbConfig } from '../services/pouch-db.js';
import { store } from '../store.js';
import {UpdateModal} from "../components/update-modal";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.modalOpen = this.modalOpen.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.state = {
      name: "niraj",
      data :[],
      modalIsOpen: false
    };
    this.email = null;
  }
 
  componentWillMount() {
  }
  
  componentDidMount() {
    var parentInstance = this;
    var userArray = [];
    if(store.getState().username &&  store.getState().username.role == 'admin') {
      var email = store.getState().username.username.obj.email;
      dbConfig.findByNotEmail(email).then(function(doc) {
        for(var i = 0; i < doc.docs.length; i++) {
          var row = doc.docs[i].obj;
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
  
  deleteUser() {
    var email = this.children.props.value;
    dbConfig.findByEmail(email).then(function(doc) {
      var user = doc.docs[0];
      dbConfig.removeDoc(user).then(function(result) {
        parentInstance.componentDidMount();
      });
    });
  }
  
  modalOpen(event) {
    var parentInstance = this;
    console.log('modal');
    console.log(this);
    console.log(event.target.value);
    dbConfig.findByEmail(event.target.value).then(function (doc) {
      console.log('find by email');
      console.log(doc.docs[0]);
      parentInstance.setState({
        user: doc.docs[0],
        modalIsOpen: true
      });
    });
  }
  modalClose() {
    this.setState({modalIsOpen: false});
  }
  
  render() {
    var list = this.state.data.map(p => {
      return (
        <tr key={ Math.random()}>
          {Object.keys(p).filter(k => k !== 'c_password' && k !== 'password' && k !== 'file').map(k => {
            return (<td className="text-center" key={ Math.random()}>{p[k]}</td>);
          })}
          { store.getState().username && store.getState().username.role == "admin"? <td className="text-center">
          <Confirm
            onConfirm = {this.deleteUser}
            confirmText="Yes"
            body="Are u sure?"
            title="Deleting User"
          ><button className="btn btn-primary">Delete</button>
          </Confirm>
          </td>: <td> <button className="btn btn-primary" onClick={this.modalOpen} value={p['email']}>Update</button></td> }
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
            { store.getState().username && store.getState().username.role == "admin"? <th className="text-center">Action</th>: null }
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        <UpdateModal open={this.state.modalIsOpen} modalClose={this.modalClose} user={this.state.user}/>
        <button className="btn btn-primary" onClick={this.modalOpen}>Open Modal</button>
      </div>
    );
  }
}