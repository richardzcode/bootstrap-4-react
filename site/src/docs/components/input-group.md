## InputGroup

```
import React, { Component } from 'react';
import { InputGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup sm>
          <InputGroup.Prepend><InputGroup.Text>Small</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup lg>
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <InputGroup.Text>@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text><input type="checkbox" /></InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>First and last name</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" aria-label="First name" />
          <Form.Input type="text" aria-label="Last name" />
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
      </div>
    )
  }
}
```
