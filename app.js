import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PouchDB from 'pouchdb';
export const DB = new PouchDB('NewDB');

ReactDOM.render((
    <Router>
       {routes}
    </Router>
), document.getElementById('root'));