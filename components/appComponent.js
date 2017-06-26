import React from 'react';
import {Header} from './header.js';
import {Footer} from './footer.js';
class App extends React.Component {
    constructor() {
      super();
    }
   render() {
       console.log(this.props.routes.props.children);
      return (
         <div>
         <Header />
         <div>{this.props.routes.props.children}</div>
         <Footer/>
         </div>
      )
   }
}

export default App;