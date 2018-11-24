import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import SideNav from './SideNav.js';

class Home extends Component {
  handleItemClick = name => this.setState({ activeItem: name })
  render() {
    const { activeItem } = this.state || {}
    console.log("Home props:", this.props)
    return(
      <div>
        {this.props.isAuthed ?
          // FIXME: Render instead the main website of student's classes and stuff.
          <div>
            <h1>{this.props.user.first_name} is logged in!</h1>
            <SideNav/>
          </div>:
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
