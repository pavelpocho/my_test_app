import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './containers/Login/Login';
import App from './App';
import './index.css';
import EventList from './containers/EventList/index.js';
import SignUp from "./containers/SignUp/index.js"


ReactDOM.render(
  <Router>
      <div style={{minWidth: "100%", minHeight: "100vh"}}>
        <Route exact path="/" component={App} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/EventList" component={EventList} />
        <Route exact path="/SignUp" component={SignUp} />
      </div>
  </Router>,
  document.getElementById('root')
)
