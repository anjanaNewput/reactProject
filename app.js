import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { Provider } from 'react-redux';
import { store } from './store.js';
import './assets/scss/app.scss';
import { dbConfig } from './services/pouch-db.js';

ReactDOM.render((
  <Provider store = {store}>
    <Router>
      {routes}
    </Router>
  </Provider>
), document.getElementById('root'));