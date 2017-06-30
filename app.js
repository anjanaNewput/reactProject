import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers.js';
import PouchDB from 'pouchdb';
export const DB = new PouchDB('NewDB');
export const store = createStore(reducers);
ReactDOM.render((
    <Provider store = {store}>
        <Router>
           {routes}
        </Router>
   </Provider>
), document.getElementById('root'));