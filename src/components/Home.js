import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {Redirect} from 'react-router-dom';
import SideNav from './SideNav.js';
import NavBar from './NavBar.js';
import BodyContent from './BodyContent.js';
import { Container, Grid} from 'semantic-ui-react'


class Home extends Component {

  constructor(props) {
    super(props)
    this.setCurrentCourse = this.setCurrentCourse.bind(this);
    this.state = {
      courses: []
    }
  }
  //course_id from database
  setCurrentCourse(course_id) {
    // console.log("setCurrentCourse(course_id): ", course_id)
    this.setState( {current_course_id: course_id})
  }

  render() {
    console.log("Home props got updated!:", this.props)
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar
              user={this.props.user}
              currentCourse={(course_id) => this.setCurrentCourse(course_id)}
              updatemods={(modules) => {console.log("I can see the modules in Home.js", modules); this.props.setModules(modules)}}
            />
            <Container>
              <Grid>
                <Grid.Row width={10}>
                  {/* FIXME: This might break with a lot of modules. */}
                  <Grid.Column width={4} style={{overflow: 'auto', maxHeight: 600 }}>
                    <SideNav user={this.props.user}/>
                  </Grid.Column>
                  <Grid.Column width={12} style={{overflow: 'auto', maxHeight: 600 }}>
                    <BodyContent user={this.props.user}/>
                  </Grid.Column>
                </Grid.Row>
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

export default Home;
