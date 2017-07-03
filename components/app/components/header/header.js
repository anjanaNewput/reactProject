import React from 'react';
import { Link } from 'react-router-dom';
import { UserName} from './components/userName.js';
import { Logout} from './components/logout.js';
import { store } from './../../../../app.js';
export class Header extends React.Component {
    constructor() {
      super();
    }
   render() {
      return (
         <nav className="navbar navbar-default" id="header">
             <div className="container-fluid">
               <div className="navbar-header">
                 <a className="navbar-brand">React App</a>
               </div>
               <ul className="nav navbar-nav navbar-right">
                 <li><UserName username={store.getState().username ? store.getState().username.username : null}/></li>
                 <li>{store.getState().username ? <Logout /> : null}</li>
               </ul>
             </div>
         </nav>
      )
   }
}