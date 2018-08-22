## Navbar

```
import React, { Component } from 'react';
import { Navbar, Nav, Button, Dropdown, Form, Collapse, BImg } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Navbar expand="sm" light bg="light">
        <Navbar.Brand href="#">
          <BImg src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg" height="30" width="30" display="inline-block" align="top" />
          Bootstrap
        </Navbar.Brand>
        <Navbar.Toggler target="#navbarSupportedContent" />
        <Collapse navbar id="navbarSupportedContent">
          <Navbar.Nav>
            <Nav.Item active>
              <Nav.Link href="#">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item dropdown>
              <Nav.Link dropdownToggle>Dropdown</Nav.Link>
              <Dropdown.Menu>
                <Dropdown.Item>Action</Dropdown.Item>
                <Dropdown.Item>Another action</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link disabled>Disabled</Nav.Link>
            </Nav.Item>
            <Form inline>
              <Form.Input placeholder="Search" />
              <Button outline success mx="0 md-2">Search</Button>
            </Form>
          </Navbar.Nav>
          <Navbar.Text>Navbar text</Navbar.Text>
        </Collapse>
      </Navbar>
    )
  }
}
```
