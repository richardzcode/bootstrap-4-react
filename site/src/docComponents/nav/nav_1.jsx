import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav>
        <Nav.Item>
          <Nav.Link active href="#">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#" disabled>Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    )
  }
}
