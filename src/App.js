import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Login from "./components/Login.js";

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Login/>
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>

    );
  }
}

export default App;
