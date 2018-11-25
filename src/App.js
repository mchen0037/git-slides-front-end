import React, { Component } from 'react';
import './App.css';
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import MyPage from "./components/MyPage.js";
import {BrowserRouter, Route, Link, Switch} from "react-router-dom";

function Error(props) {
  return(
    <div>
        <h1>404 Error: {props.location.pathname} Not Found</h1>
        <Link to="/">To Safety!</Link>
    </div>
  )
}

class App extends Component {
  constructor() {
    super()
    this.authenticate = this.authenticate.bind(this);
    this.state = {
      loggedIn: true,
      user: {
        id: 3,
        first_name: "Mighty",
        last_name: "Chen",
        user_name: "mchen73@ucmerced.edu",
        user_type: 2
      }
    }
  }

  authenticate(user) {
    // console.log('===\nhello from authenticate', user, "\n===\n")
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
    // console.log("App state:", this.state)
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={() =>
                <Home
                  isAuthed={this.state.loggedIn}
                  user={this.state.user}
                />} />
              <Route exact path="/login" component={() =>
                <Login
                  redirect={this.state.loggedIn}
                  authenticate={this.authenticate}
                />}/>
              <Route exact path="/my" component={() =>
                <MyPage
                  isAuthed={this.state.loggedIn}
                  user={this.state.user}
                />}/>
              <Route component={Error}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
