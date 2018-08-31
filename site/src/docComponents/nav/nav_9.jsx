import React, { Component } from 'react';
import { Nav } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills flex="column sm-row">
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
