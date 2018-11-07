import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


var body = {
    username: 'mchen73@ucmerced.edu',
    password: 'lol',
}

var server = 'http://0.0.0.0:4000/auth'

class Textbox extends Component {
  render() {
    return(
      <div>
        Textbox id is: {this.props.id}
        <input ref={this.props.id} type="text"/>
      </div>
    );
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  authenticated(val) {
    this.setState( {auth: val});
  }

  submit() {
    var user = ReactDOM.findDOMNode(this.refs.form_username).value
    var password = ReactDOM.findDOMNode(this.refs.form_password).value

    axios.post(
      server, {user, password})
      .then(res => {
        console.log(res);
        console.log(res.data);
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
      <div>
        <div><input ref="form_username" type="text"/></div>
        <div><input ref="form_password" type="text"/></div>
        <button onClick = {(e) => {this.submit()}}>
          Login
        </button>
      </div>
    )
  }
}

export default Login;
