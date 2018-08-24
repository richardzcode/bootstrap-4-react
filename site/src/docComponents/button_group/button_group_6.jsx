import React, { Component } from 'react';
import { ButtonGroup, Button, Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ButtonGroup vertical aria-label="Vertical example">
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
        </ButtonGroup>

        <div>&nbsp;</div>

        <ButtonGroup vertical aria-label="Button group with nested dropdown">
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <ButtonGroup>
            <Button secondary dropdownToggle id="btnGroupDrop1">
              Dropdown
            </Button>
            <Dropdown.Menu aria-labelledby="btnGroupDrop1">
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
          </ButtonGroup>
          <Button secondary>Button</Button>
          <Button secondary>Button</Button>
          <ButtonGroup>
            <Button secondary dropdownToggle id="btnGroupDrop2">
              Dropdown
            </Button>
            <Dropdown.Menu aria-labelledby="btnGroupDrop2">
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
              <Dropdown.Item href="#">Dropdown link</Dropdown.Item>
            </Dropdown.Menu>
          </ButtonGroup>
        </ButtonGroup>
      </React.Fragment>
    )
  }
}
