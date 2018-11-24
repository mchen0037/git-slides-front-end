import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import SideNav from './SideNav.js';
import NavBar from './NavBar.js';
import BodyContent from './BodyContent.js';
import { Container, Header, Segment } from 'semantic-ui-react'


class Home extends Component {
  render() {
    // console.log("Home props:", this.props)
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar/>
            <Container fluid>
              <Header>
                <Segment.Group horizontal>
                  <Segment><SideNav/></Segment>
                  <Segment attached='top'><BodyContent/></Segment>
                </Segment.Group>
              </Header>
            </Container>
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
