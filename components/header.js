import React from 'react';
import { Link } from 'react-router-dom';
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
                 <li><Link  to="/login">Login</Link></li>
               </ul>
             </div>
         </nav>
      )
   }
}