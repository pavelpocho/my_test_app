import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import React from 'react';
import App from './App.js'
import Login from "./containers/Login.js"
import EventList from "./containers/EventList/index.js"
import SignUp from "./containers/SignUp/index.js"

const Routes = () => (
  <Router>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/Login" component={Login} />
        <Route path="/EventList" component={EventList} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
  </Router>
);

export default Routes;