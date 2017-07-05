import React from 'react';
import { UserName} from './user-name.js';
import { Logout} from '../containers/logout.js';
import { store } from '../store.js';
export const Header = (() => {
    return (
       <nav className="navbar navbar-default" id="header">
           <div className="container-fluid">
             <div className="navbar-header">
               <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                 <span className="sr-only">Toggle navigation</span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
                 <span className="icon-bar"></span>
               </button>
               <a className="navbar-brand">React App</a>
             </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
               <ul className="nav navbar-nav navbar-right">
                 <li><UserName username={store.getState().username ? store.getState().username.username : null}/></li>
                 <li>{store.getState().username ? <Logout /> : null}</li>
               </ul>
             </div>
           </div>
       </nav>
    );
});