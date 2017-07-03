import React from 'react';
import { Header } from './components/header/header.js';
import { Footer } from './components/footer/footer.js';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor() {
      super();
    }
  render() {
    return (
      <div>
        <Header/>
        <div className="container main-container">
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;