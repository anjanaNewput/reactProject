import React from 'react';
import {Header} from './header.js';
import {Footer} from './footer.js';
class App extends React.Component {
    constructor() {
      super();
    }
   render() {
      return (
         <div>
         <Header />
         <Footer/>
         </div>
      )
   }
}

export default App;