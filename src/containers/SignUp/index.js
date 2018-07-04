import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import SideImage from '../../components/SideImage/index.js';
import Header from '../../components/Header/index.js';

export default class SignUp extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        repeatPassword: ""
    }
  }

  /*componentDidMount() {
    document.getElementsByClassName("loginWrap")[0].style.gridTemplateColumns = "max-content auto";
  }*/

  validateForm() {
    return this.state.email.length > 0 &&
      this.state.password.length > 0 &&
      this.state.firstName.length > 0 &&
      this.state.lastName.length > 0 &&
      this.state.password == this.state.repeatPassword
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    window.userEmail = event.target[2].value;
    this.props.history.push("/EventList");
  }

  render() {
    return (
        <div className="loginWrap">
        <Header/>
        <SideImage/>
        <div className="Login">
        <h1 className="title">Get started absolutely free.</h1>
        <h2 className="subtitle">Enter your details below.</h2>

          <form onSubmit={this.handleSubmit} >
          <FormGroup controlId="firstName" bsSize="large" className="formLine">

              <FormControl
                value={this.state.firstName}
                onChange={this.handleChange}
                type="text"
                placeholder="First Name"
                className="inputField"
              />
            </FormGroup>
            <FormGroup controlId="lastName" bsSize="large" className="formLine">

              <FormControl
                value={this.state.lastName}
                onChange={this.handleChange}
                type="lastName"
                placeholder="Last Name"
                className="inputField"
              />
            </FormGroup>
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
            <FormGroup controlId="repeatPassword" bsSize="large" className="formLine">

              <FormControl
                value={this.state.repeatPassword}
                onChange={this.handleChange}
                type="password"
                placeholder="Repeat Password"
                className="inputField"
              />
            </FormGroup>
            <div className="noAccountWrap">
                <p className="noAccountText">Already have an account?</p>
                <Link to="/Login" className="signUpLink">Sign in</Link>
            </div>
            <div className="buttonPosition"> 
              <Button
                block
                bsSize="large"
                disabled={!this.validateForm()}
                type="submit"
                className="loginButton"
              >
              Sign Up
              </Button>

            </div>
          </form>
        </div>
       </div>
       );
  }
}