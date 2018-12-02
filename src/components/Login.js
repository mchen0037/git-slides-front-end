import React, { Component } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import {Container, Segment, Form, Button} from 'semantic-ui-react';

// var server = 'http://172.20.10.2:4000/auth'
var server = 'http://0.0.0.0:4000/auth'

class Login extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.state = {
      email: "",
      pass: "",
    }
  }

  async submit() {
    // console.log('LOGIN BUTTON CLICKED')
    var user = this.state.email
    var password = this.state.pass

    // let auth_response = await
    //   fetch(server, {user, password} );

    // console.log(auth_response)
    axios.post(
      server, {user, password})
      .then(res => {
        // console.log(res.data)
        if (res.data === -1) {
          console.log('INCORRECT ID!')
        }
        this.props.authenticate(res.data)
      });
  }

  handleChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  //will stil have password value even if its dots
  handleChangePass(e) {
    this.setState({
      pass: e.target.value
    })
  }

  render() {
    // console.log(this.state.email)
    return (this.props.redirect) ? <Redirect to="/" /> : (
      <Container text>
        <Segment padded>
          <Form>
            <Form.Input
              inline label="Email"
              placeholder="example@ucmerced.edu"
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
            <Form.Input
              inline label="Password"
              type='password'
              placeholder="Password"
              value={this.state.pass}
              onChange={this.handleChangePass}
            />
            <Button
              type='submit'
              onClick={()=>{this.submit()}}
            >
              Submit
            </Button>
          </Form>
        </Segment>
      </Container>
    )
  }
}

export default Login;


//https://bootsnipp.com/snippets/featured/login-form
