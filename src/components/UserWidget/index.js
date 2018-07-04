import React, { Component } from "react";
import "./index.css";
import { Link } from 'react-router-dom';

class UserWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
      width: 0
    }
  }

  componentDidMount() {
    this.setState({
      width: window.getComputedStyle(document.getElementsByClassName("userWidget")[0]).getPropertyValue("width")
    });
  }

  open = () => {
    this.setState((prevState) => {
      return {open: !prevState.open}
    })
  }

  render() {

    const wrapClass = this.state.open ? "userWidget openUserWidget" : "userWidget";

    if (this.state.width > 0) {
      document.getElementsByClassName("userWidget")[0].style.maxWidth = this.state.width;
    }
    const logoutButton = this.state.open ? <button className="logoutButton" style={{maxWidth: this.state.width}}>Logout</button> : null;

    return (
      <div className={wrapClass}>
        <div className="userCircle">
          <p>TW</p>
        </div>
        <p>Tom Watts</p>
        <button className="userDropdown" onClick={this.open}><i className="material-icons">arrow_drop_down</i></button>
        {logoutButton}
      </div>
    ) 
  }
}

export default UserWidget;
