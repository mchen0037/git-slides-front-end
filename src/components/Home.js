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
    this.setModules = this.setModules.bind(this);
    this.setCurrentCourse = this.setCurrentCourse.bind(this);
    this.state = {
      // courses: [],
      modules: [],
      selectedCourseName: "Courses"
    }
  }
  //course_id from database
  setCurrentCourse(course_id, course_name) {
    this.setState( {current_course_id: course_id, selectedCourseName: course_name})
  }

  setModules(modules) {
    console.log("Setting Modules in Home!", modules)
    this.setState({modules: modules})
  }

  render() {
    console.log("Home State:" , this.state)
    // console.log("Home Props:" , this.props)
    return(
      <div>
        {this.props.isAuthed ?
          <div>
            <NavBar
              user={this.props.user}
              currentCourse={(course_id, course_name) => this.setCurrentCourse(course_id, course_name)}
              updatemods={(modules) => {this.setModules(modules)}}
              selectedCourseName={this.state.selectedCourseName}
            />
            {this.state.modules[0] &&
              <Container>
                <Grid>
                  <Grid.Row width={10}>
                    {/* FIXME: This might break with a lot of modules. */}
                    <Grid.Column width={4} style={{overflow: 'auto', maxHeight: 600 }}>
                      <SideNav
                        user={this.props.user}
                        modules={this.state.modules}
                      />
                    </Grid.Column>
                    <Grid.Column width={12} style={{overflow: 'auto', maxHeight: 600 }}>
                      <BodyContent user={this.props.user}/>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Container>
            }
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
