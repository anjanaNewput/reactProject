import React from 'react';
import { UserName} from './user-name.js';

import { UserSettings } from '../containers/user-setting.js';
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
               <a className="navbar-brand"><img className="brand-img" src="../assets/images/react_logo.png" alt="React App"/></a>
             </div>
             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
             {store.getState().user ?
               <ul className="nav navbar-nav navbar-right">
                 <UserName user={store.getState().user.user.obj.email}/>
                 <li><a><img className="profile-img"  src={store.getState().profileImg ? store.getState().profileImg.url : '../assets/images/profile.png' }/></a></li>
                 <UserSettings />
               </ul>
            : null}
             </div>
           </div>
       </nav>
    );
});