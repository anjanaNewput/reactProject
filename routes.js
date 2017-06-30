// routes.js
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import App from './components/appComponent.js';
import Login from './components/login.js';
import RegisterUser from './components/register.js';
import UserList from './components/userList.js';

const routes = (
    <App>
      <Redirect from='/' to='/login'/> 
      <Route path="/login" component={Login}/>
      <Route path="/register" component={RegisterUser}/>
      <Route path="/users" component={UserList}/>
    </App>
);
export default routes;