import React from 'react';
import { Header } from '../components/header.js';
import { Footer } from '../components/footer.js';
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