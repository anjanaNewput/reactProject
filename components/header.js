import React from 'react';

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
             </div>
         </nav>
      )
   }
}