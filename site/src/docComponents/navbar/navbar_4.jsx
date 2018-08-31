import React, { Component } from 'react';
import { Navbar, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar light bg="light">
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Form inline my="2 lg-0">
          <Form.Input type="search" placeholder="Search" mr="sm-2" />
          <Button outline success my="2 sm-0">Search</Button>
        </Form>
      </Navbar>
    )
  }
}
