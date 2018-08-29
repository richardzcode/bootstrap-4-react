import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="2">
          <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup mb="2">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <InputGroup.Text>@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <label>Your vanity URL</label>
        <InputGroup mb="2">
          <InputGroup.Prepend>
            <InputGroup.Text>https://example.com/users/</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="2">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>With textarea</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Textarea />
        </InputGroup>
      </div>
    )
  }
}
