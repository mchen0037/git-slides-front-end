import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown, MenuItem} from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return(
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            Project
          </Navbar.Brand>
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
              <MenuItem eventKey={2.1}>Settings</MenuItem>
              <MenuItem eventKey={2.2}>Logout</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;
