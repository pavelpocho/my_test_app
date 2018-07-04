import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { Link } from 'react-router-dom';
import Header from '../../components/Header/index.js';
import SideImage from '../../components/SideImage/index.js';

//import EventList from './containers/EventList/index.js';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    document.body.style.backgroundColor = "white";
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    window.userEmail = event.target[0].value;
    this.props.history.push("/EventList");
  }

  render() {
    return (
      <div className="loginWrap">
        <SideImage/>
        <Header/>
        <div className="Login">
        <h1 className="title">Sign in to Eventio.</h1>
        <h2 className="subtitle">Enter your details below.</h2>

          <form onSubmit={this.handleSubmit} className="form">
            <FormGroup controlId="email" bsSize="large" className="formLine">

              <FormControl
                autoFocus
                type="email"
                value={this.state.email}
                onChange={this.handleChange}
                placeholder="Email"
                className="inputField"
              />
            </FormGroup>
            <FormGroup controlId="password" bsSize="large" className="formLine">

              <FormControl
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                placeholder="Password"
                className="inputField"
              />
            </FormGroup>
            <div className="noAccountWrap">
                <p className="noAccountText">Don't have an account yet?</p>
                <Link to="/SignUp" className="signUpLink">Sign up</Link>
            </div>
            <div className="buttonPosition"> 
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                className="loginButton"
              >
              Sign In
              </Button>

            </div>
          </form>
        </div>
       </div>
    );
  }
}