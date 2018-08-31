import React, { Component } from 'react';
import { Navbar, Nav, Collapse } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="lg" light bg="light">
        <Navbar.Brand href="#">Navbar w/ text</Navbar.Brand>
        <Navbar.Toggler target="#navbarText" />
        <Collapse navbar id="navbarText">
          <Navbar.Nav mr="auto">
            <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
            <Nav.ItemLink href="#">Features</Nav.ItemLink>
            <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
          </Navbar.Nav>
          <Navbar.Text>Navbar text with an inline element</Navbar.Text>
        </Collapse>
      </Navbar>
    )
  }
}
