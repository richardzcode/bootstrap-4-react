import React, { Component } from 'react';
import { Navbar, Nav, Collapse, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggler target="#navbarNav" />
        <Collapse navbar id="navbarNav">
          <Navbar.Nav>
            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="#">Features</Nav.ItemLink>
            <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.ItemLink disabled>Disabled</Nav.ItemLink>
          </Navbar.Nav>
        </Collapse>
      </Navbar>
    )
  }
}
