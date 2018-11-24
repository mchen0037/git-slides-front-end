import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

class Home extends Component {
  render() {
    console.log(this.props)
    return(
      <div>
        {this.props.isAuthed ?
          <div>You are logged in!</div> :
          <div>
            <Redirect to="/login"/>
          </div>
        }
      </div>

    )
  }
}

export default Home;
