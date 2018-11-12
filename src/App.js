import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login.js";

class App extends Component {
  constructor() {
    super()
    this.authenticate = this.authenticate.bind(this);
    this.state = {
      loggedIn: false,
      user: {
        id: -1,
        first_name: "User",
        last_name: "User",
        user_name: "something@ucm.edu",
        user_type: -1
      }
    }
  }

  authenticate(user) {
    console.log('hello from authenticate', user)
    user === -1 ? alert('Incorrect User Details!') :
    this.setState(
      { loggedIn: true,
        user: {
          id: user[0][0],
          first_name: user[0][1],
          last_name: user[0][2],
          user_name: user[0][3],
          user_type: user[0][5]
        }
      });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.loggedIn ? <p>logged in</p> : <p>not logged in</p>}</h1>
        { !this.state.loggedIn ?
          <Login authenticate={this.authenticate}/>
        :
        <h1> Logged in as: {this.state.user.first_name} {this.state.user.last_name} </h1>

        }
      </div>

    );
  }
}

export default App;
