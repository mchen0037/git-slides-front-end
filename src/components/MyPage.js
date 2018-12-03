import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import { Container, Grid, Segment } from 'semantic-ui-react'
import Gradebook from './Gradebook.js';
import Profile from './Profile.js';
import axios from 'axios';

// let server = "http://172.20.10.2:4000"
let server = "http://0.0.0.0:4000";

class MyPage extends Component {

  constructor(props) {
    super(props)
    this.state=({
      grades:[{course_name:"class",grade:0}]
    })
  }

  async getGrades(user_id){
  // The await keyword saves us from having to write a .then() block.
  let json = await axios.get(server +
    "/gradebook?user_id=" + user_id);
  // The result of the GET request is available in the json variable.
  // We return it just like in a regular synchronous function.
  return json;
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
