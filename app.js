import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './Reducers/reducers.js';
var store = createStore(reducer);

ReactDOM.render((
    <Provider store = {store}>
    <Router>
       {routes}
    </Router>
    </Provider>
), document.getElementById('root'));