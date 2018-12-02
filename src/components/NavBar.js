import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import axios from 'axios';

// let server = "http://172.20.10.2:4000"
let server = "http://0.0.0.0:4000"

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.courseClicked = this.courseClicked.bind(this);
    console.log("hello! rerendering NavBar.")
    this.state = {
      courses: this.props.user.courses,
      //FIXME: The selected course should be up higher because this will re-rerender
      // the NavBar upon a state update, thus setting the selectedCourse back to 0 every time.
      // send help.
      selectedCourse: this.props.selectedCourseName
    }
  }

  componentDidMount() {
    // console.log(this.props.user)
    // this.setState({
    //   selectedCourse: this.props.selectedCourseName
    // })
  }

  async getJSONAsync(id, course){
  // The await keyword saves us from having to write a .then() block.
  let json = await axios.get(server + "/modules?user_id=" + id + "&course_id=" + course);
  console.log('after the call to service');
  // The result of the GET request is available in the json variable.
  // We return it just like in a regular synchronous function.
  return json;
  }


  async courseClicked(e, val) {
    // console.log("<<<<<<<<<<<<<<<<<<<<courseClicked props:", this.props)
    this.props.currentCourse(e.target.id, e.target.innerText)
    this.setState({ selectedCourse: e.target.innerText})
    // QUERY FOR THE COURSE INFO FOR THAT CLASS.

    var id = this.props.user.id
    var course = e.target.id

    let abc = this.getJSONAsync(id,course);
    abc.then( res => {
      this.props.updatemods(res.data)
    });
  }

  render() {
    console.log("NavBar State: ", this.state)
    console.log("NavBar Props:" , this.props)
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              Project
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullLeft>
            {this.state.courses[0] && typeof this.props.currentCourse  === "function" &&
              <NavDropdown eventKey={1} title={this.state.selectedCourse} id="basic-nav-dropdown">
                {this.state.courses.map( course =>
                  <MenuItem
                    key={course.id}
                    id={course.id}
                    // courseid={course.id}
                    onClick={this.courseClicked}
                  >
                    {course.name}
                  </MenuItem>
                )}
              </NavDropdown>
            }
          </Nav>
          <Nav pullRight>
            <NavDropdown
              eventKey={2}
              title={this.props.user.first_name + " " + this.props.user.last_name}
              id="basic-nav-dropdown"
              >
              <LinkContainer to="/my">
                <MenuItem eventKey={2.1}>Profile</MenuItem>
              </LinkContainer>
              <MenuItem divider />
              <MenuItem eventKey={2.2}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
          <LinkContainer to="/">
              <NavItem eventKey={4}>
                Home
              </NavItem>
          </LinkContainer>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
