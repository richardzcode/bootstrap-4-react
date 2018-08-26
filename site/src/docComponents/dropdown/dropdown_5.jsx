import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.Item href="#">Regular link</Dropdown.Item>
        <Dropdown.Item href="#" active>Active link</Dropdown.Item>
        <Dropdown.Item href="#" disabled>Disabled link</Dropdown.Item>
        <Dropdown.Item href="#">Another link</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
