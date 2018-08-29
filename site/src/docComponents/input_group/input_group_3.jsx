import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>
            <Form.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.PrependText>
          <Form.Input type="text" aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.PrependText>
            <Form.Radio aria-label="Radio for following text input" />
          </InputGroup.PrependText>
          <Form.Input type="text" aria-label="Text input with radio" />
        </InputGroup>
      </div>
    )
  }
}
