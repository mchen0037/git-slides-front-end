import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './NavBar.js';
import { Container, Grid, Segment } from 'semantic-ui-react'
import Gradebook from './Gradebook.js';
import Profile from './Profile.js';
import axios from 'axios';

let server = "http://172.20.10.2:4000"

class MyPage extends Component {

  constructor(props) {
    super(props)
    this.state=({
      grades:[{course_name:"class",grade:0}]
    })
  }

  // UI Stuff.
  componentDidMount() {
    //axios call to get the grades
    // console.log(this.props)
    console.log("componentDidMount")
    let user_id = this.props.user.id
    axios.get(server + "/gradebook?user_id=" + user_id)
      .then(function(res){
        console.log(res.data)
        this.setState(
          {
              grades: res.data
          })
      });
    // this.setState(
    //   {
    //     grades:[
    //       {
    //         title: "CSE 165",
    //         grade: 89.5
    //       },
    //       {
    //         title: "CSE 111",
    //         grade: 94.2
    //       },
    //       {
    //         title: "MATH 180",
    //         grade: 100
    //       }
    //     ]
    // })
  }

  render() {
    console.log(this.state)
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
                      <Gradebook grades={this.state.grades}/>
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
