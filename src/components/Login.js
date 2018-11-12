import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './Login.css';

var server = 'http://0.0.0.0:4000/auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit() {
    var user = ReactDOM.findDOMNode(this.refs.inputEmail).value
    var password = ReactDOM.findDOMNode(this.refs.inputPassword).value

    axios.post(
      server, {user, password})
      .then(res => {
        // console.log(res);
        // console.log(this.props.authenticate)
        console.log(res.data)
        this.props.authenticate(res.data)
      });

    return(
      <div>
        Textbox id is: {this.props.id}
        <input ref={this.props.id} type="text"/>
      </div>
    );

  }

  render() {
    return(
    // <body id="LoginForm">
      <div className="container">
        {/* <h1 className="form-heading">Login</h1> */}
        <div className="login-form">
          <div className="main-div">
            <div className="panel">
              <h2>Login</h2>
              <p>Please enter your email and password</p>
            </div>
            <form id="Login">
              <div className="form-group">
                <input type="email" className="form-control" ref="inputEmail" placeholder="  Email Address"/>
              </div>
              <div className="form-group">
                <input type="password" className="form-control" ref="inputPassword" placeholder="  Password"/>
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {this.submit()}}>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    // </body>
    )
  }
}

export default Login;


//https://bootsnipp.com/snippets/featured/login-form
