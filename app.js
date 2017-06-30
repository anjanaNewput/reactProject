import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PouchDB from 'pouchdb';
export const DB = new PouchDB('MyDB');
var data = [
  {'id':1,'firstName':'Anjana', 'lastName':'Singh', 'email':'anjana@newput.com','phoneNumber':'9827290856', 'doa':'1/2/2016'},
  {'id':2,'firstName':'John', 'lastName':'Deo', 'email':'jhon@gmail.com','phoneNumber':'1234567889', 'doa':'2/5/2016'},
  {'id':3,'firstName':'Alan', 'lastName':'Mak', 'email':'alan@gmail.com','phoneNumber':'9988776655', 'doa':'13/7/2015'},
  {'id':4,'firstName':'Bill', 'lastName':'Tani', 'email':'bill@newput.com','phoneNumber':'4433221166', 'doa':'5/10/2014'},
  {'id':5,'firstName':'Polina', 'lastName':'Matvikoch', 'email':'polina@newput.com','phoneNumber':'4433556688', 'doa':'3/2/2017'}
];
    
DB.put({ _id: 'users', data: 'data'}, function(err, response) {
 if (err) { return console.log(err); }
  // handle response
});

ReactDOM.render((
    <Router>
       {routes}
    </Router>
), document.getElementById('root'));