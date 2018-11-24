import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';

class Home extends Component {
  render() {
    console.log("Home props:", this.props)
    return(
      <div>
        {this.props.isAuthed ?
          // FIXME: Render instead the main website of student's classes and stuff.
          <div>{this.props.user.first_name} is logged in!</div> :
          <div>
            {console.log("Not logged in.. going to /login!")}
            <Redirect to="/login/#"/>
          </div>
        }
      </div>

    )
  }
}

export default Home;
