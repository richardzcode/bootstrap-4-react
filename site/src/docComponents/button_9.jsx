import React, { Component } from 'react';
import { Button, ButtonGroup, Radio } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ButtonGroup toggle>
        <Button secondary active as="label">
          <Radio autoComplete="off" />
          Active
        </Button>
        <Button secondary as="label">
          <Radio autoComplete="off" />
          Radio
        </Button>
        <Button secondary as="label">
          <Radio autoComplete="off" />
          Radio
        </Button>
      </ButtonGroup>
    )
  }
}
