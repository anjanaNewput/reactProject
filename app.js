import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import routes from './routes.js';
import App from './components/appComponent.js';

ReactDOM.render((
    <div>
        <Router>
            <App routes={routes}></App>
        </Router>
    </div>
    ), document.getElementById('root'));