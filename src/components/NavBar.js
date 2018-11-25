import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

var fake_course_info = {
  courses: [
    {
      id: 1,
      name: "CSE 165",
      professor: "Angelo Kyrilov"
    },
    {
      id: 2,
      name: "CSE 111",
      professor: "Florin Rusu",
    },
    {
      id: 3,
      name: "Math 180",
      professor: "Suzanne Sindi"
    }
  ]
}

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.courseClicked = this.courseClicked.bind(this);
    this.state = {
      courses: [],
      selectedCourse: "Courses"
    }
  }

  componentDidMount() {
    this.setState({
      courses: fake_course_info.courses,
      selectedCourse: fake_course_info.courses[0].name
    })
  }

  courseClicked(e, val) {
    // console.log("e:", e.target)
    this.props.currentCourse(e.target.id)
    this.setState({ selectedCourse: e.target.innerText})
  }

  render() {
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
            {this.state.courses[0] ?
              <NavDropdown eventKey={1} title={this.state.selectedCourse} id="basic-nav-dropdown">
                {this.state.courses.map( course =>
                  <MenuItem
                    key={1 + (course.id) / 10}
                    id={1 + (course.id) / 10}
                    onClick={this.courseClicked}
                  >
                    {course.name}
                  </MenuItem>
                )}
              </NavDropdown> :
              <Nav pullLeft>
                <NavItem>
                  Loading..
                </NavItem>
              </Nav>
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
