import React from 'react';
import {Header} from './header.js';
import {Footer} from './footer.js';
import { connect } from 'react-redux';
import { loadUser } from '../actions/actions.js';

class App extends React.Component {
    constructor() {
      super();
    }
    componentDidMount() {
        this.props.dispatch(loadUser());
    }
  render() {
     
       
    return (
      <div>
        <Header />
        <div className="container main-container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

function select(state) {
    console.log(state);
   return {
      userList: state.users
   }
}

export default connect(select)(App);