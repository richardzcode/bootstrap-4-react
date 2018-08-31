import React, { Component } from 'react';
import { Nav, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Nav pills>
        <Nav.ItemLink active href="#">Active</Nav.ItemLink>
        <Nav.Item dropdown>
          <Nav.Link href="#" dropdownToggle>Dropdown</Nav.Link>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item href="#">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Nav.Item>
        <Nav.ItemLink href="#">Link</Nav.ItemLink>
        <Nav.ItemLink href="#" disabled>Disabled</Nav.ItemLink>
      </Nav>
    )
  }
}
