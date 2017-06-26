import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';

console.log(routes);
ReactDOM.render((
  <Router >
     {routes}
  </Router>
), document.getElementById('root'));