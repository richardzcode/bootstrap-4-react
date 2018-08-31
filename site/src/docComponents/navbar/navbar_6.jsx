import React, { Component } from 'react';
import { Navbar, Nav, Button, Form, Collapse } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar expand="lg" dark bg="dark" mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor1" />
          <Collapse navbar id="navbarColor1">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline info my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" dark bg="primary" mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor2" />
          <Collapse navbar id="navbarColor2">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline light my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
        <Navbar expand="lg" light style={{ backgroundColor: '#e3f2fd' }} mb="3">
          <Navbar.Brand href="#">Navbar</Navbar.Brand>
          <Navbar.Toggler target="#navbarColor3" />
          <Collapse navbar id="navbarColor3">
            <Navbar.Nav mr="auto">
              <Nav.ItemLink href="#" active>Home</Nav.ItemLink>
              <Nav.ItemLink href="#">Features</Nav.ItemLink>
              <Nav.ItemLink href="#">Pricing</Nav.ItemLink>
              <Nav.ItemLink href="#">About</Nav.ItemLink>
            </Navbar.Nav>
            <Form inline my="2 lg-0">
              <Form.Input type="search" placeholder="Search" mr="sm-2" />
              <Button outline primary my="2 sm-0">Search</Button>
            </Form>
          </Collapse>
        </Navbar>
      </React.Fragment>
    )
  }
}
