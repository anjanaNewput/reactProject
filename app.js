import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/reducers.js';
export const store = createStore(reducers);
ReactDOM.render((
    <Provider store = {store}>
        <Router>
           {routes}
        </Router>
   </Provider>
), document.getElementById('root'));