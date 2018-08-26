import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.Header>Dropdown header</Dropdown.Header>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
