import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import { Container, Grid, Segment } from 'semantic-ui-react'
import Gradebook from './Gradebook.js';
import Profile from './Profile.js';

class MyPage extends Component {

  constructor(props) {
    super(props)
    this.state=({
      grades:[{course_name:"class",grade:0}]
    })
  }

  render() {
    console.log("MyPage State:", this.state)
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar
              user={this.props.user}
            />
            <Container>
              <Grid columns={1}>
                <Grid.Column>
                  <Grid.Row width={10}>
                    <Profile user={this.props.user}/>
                  </Grid.Row>
                  <Grid.Row width={10}>
                    <Segment>
                      <Gradebook
                        grades={this.state.grades}
                        user={this.props.user}
                      />
                    </Segment>
                  </Grid.Row>
                </Grid.Column>
              </Grid>
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

export default MyPage;
