import React, { Component } from 'react';
import { Button, ButtonGroup, Checkbox } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup toggle>
        <Button secondary active as="label">
          <Checkbox defaultChecked autoComplete="off" />
          Checked
        </Button>
      </ButtonGroup>
    )
  }
}
