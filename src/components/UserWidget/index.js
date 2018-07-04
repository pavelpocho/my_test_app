import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

export default class UserWidget extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
    	<div className="userWidget">
    		<p className="welcomeText">Hi there!</p>
    		<p className="userEmail">{window.userEmail}</p>
    		<Link className="logoutButton" to="/Login">Log out</Link>
    	</div>
    );
  }
}