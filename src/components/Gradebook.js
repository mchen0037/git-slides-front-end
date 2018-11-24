import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import { Container, Header, Segment } from 'semantic-ui-react'


class Gradebook extends Component {
  render() {
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar/>
            <Container>
              <Header>
                <Segment.Group>
                  <Segment attached='top'></Segment>
                  <Segment>Stuff!!</Segment>
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

export default Gradebook;
