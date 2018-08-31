import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav as="nav">
        <Nav.Link active href="#">Active</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#">Link</Nav.Link>
        <Nav.Link href="#" disabled>Disabled</Nav.Link>
      </Nav>
    )
  }
}
