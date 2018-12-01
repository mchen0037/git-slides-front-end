import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


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
    console.log(this.props.user)
    this.setState({
      courses: this.props.user.courses,
      selectedCourse: this.props.user.courses[0].name
    })
  }

  courseClicked(e, val) {
    this.props.currentCourse(e.target.id)
    this.setState({ selectedCourse: e.target.innerText})
    // QUERY FOR THE COURSE INFO FOR THAT CLASS.
    
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
            {this.state.courses[0] && typeof this.props.currentCourse  === "function" &&
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
