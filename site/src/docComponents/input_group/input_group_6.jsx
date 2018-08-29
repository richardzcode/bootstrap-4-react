import React, { Component } from 'react';
import { InputGroup, Button, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
