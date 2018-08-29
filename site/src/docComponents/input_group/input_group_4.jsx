import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <InputGroup mb="3">
        <InputGroup.PrependText>
          First and last name
        </InputGroup.PrependText>
        <Form.Input type="text" aria-label="First name" />
        <Form.Input type="text" aria-label="Last name" />
      </InputGroup>
    )
  }
}
