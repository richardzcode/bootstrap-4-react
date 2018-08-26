import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown>
        <Dropdown.Button secondary id="dropdownMenuButton">Dropdown button</Dropdown.Button>
        <Dropdown.Menu aria-labelledby="dropdownMenuButton">
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
