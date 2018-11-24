import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class NavBar extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {}
  //   this.handleClick = this.handleClick.bind(this);
  // }
  //
  // handleClick(e) {
  //   console.log(e)
  // }

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
            <NavDropdown eventKey={3} title="Courses" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Course 1</MenuItem>
              <MenuItem eventKey={3.2}>Course 2</MenuItem>
              <MenuItem eventKey={3.3}>Course 3</MenuItem>
            </NavDropdown>
          </Nav>
          <Nav pullRight>
            <NavDropdown eventKey={2} title="Name" id="basic-nav-dropdown">
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
