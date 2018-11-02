import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

var body = {
    username: 'mchen73@ucmerced.edu',
    password: 'lol',
}

var server = 'http://10.34.99.54:4000/auth'

class Button extends Component {
  submit(user, password) {
    axios.post(
      server, {user, password})
      .then(res =>  {
        console.log(res);
        console.log(res.data);
      })

  }

  render() {
    return (
      <div>
        <div>{this.props.username}</div>
        <div>{this.props.password}</div>
        <button onClick = {(e) => {this.submit(this.props.username, this.props.password)}}>
          Login
        </button>
      </div>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.data = { data: body}
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button username={this.data.data.username} password={this.data.data.password}/>
        </header>
      </div>

    );
  }
}

export default App;
