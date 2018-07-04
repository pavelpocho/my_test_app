import React, { Component } from 'react'
import logo from './logo.svg'
import { Link } from 'react-router-dom'
import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React test App</h1>
        </header>
        <div className="linkTitle"><Link to="/Login">Move to Login</Link></div>
      </div>
    );
  }
}

export default App;


