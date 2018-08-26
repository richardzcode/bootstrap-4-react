import React, { Component } from 'react';
import { Dropdown, ButtonGroup, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup>
        <Button primary>Primary</Button>
        <Dropdown.Button primary split><BSpan srOnly>Toggle Dropdown</BSpan></Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </ButtonGroup>
    )
  }
}
