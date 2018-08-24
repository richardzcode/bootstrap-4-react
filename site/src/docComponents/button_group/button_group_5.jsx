import React, { Component } from 'react';
import { ButtonGroup, Button, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup aria-label="Button group with nested dropdown">
        <Button secondary>1</Button>
        <Button secondary>2</Button>
        <ButtonGroup>
          <Button secondary dropdownToggle id="btnGroupDrop1">
            Dropdown
          </Button>
          <Dropdown.Menu aria-labelledby="btnGroupDrop1">
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
          </Dropdown.Menu>
        </ButtonGroup>
      </ButtonGroup>
    )
  }
}
