import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown.Menu style={{ position: 'static', display: 'block' }}>
        <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item disabled>Another action</Dropdown.Item>
        <Dropdown.Item>Something else here</Dropdown.Item>
      </Dropdown.Menu>
    )
  }
}
