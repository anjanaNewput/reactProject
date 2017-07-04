import React from 'react';
import { UserName} from './user-name.js';
import { Logout} from '../containers/logout.js';
import { store } from '../store.js';
export const Header = (() => {
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
    );
});