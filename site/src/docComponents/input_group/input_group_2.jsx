import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup sm mb="3">
          <InputGroup.PrependText>Small</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.PrependText>Default</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup lg mb="3">
          <InputGroup.PrependText>Large</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
      </div>
    )
  }
}
