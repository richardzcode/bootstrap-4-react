## Dropdown

```
import React, { Component } from 'react';
import { Dropdown } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Dropdown dropleft>
        <Dropdown.Button secondary lg>Dropdown button</Dropdown.Button>
        <Dropdown.Menu>
          <Dropdown.Item href="#" active>Action</Dropdown.Item>
          <Dropdown.Item disabled>Another action</Dropdown.Item>
          <Dropdown.Item>Something else here</Dropdown.Item>
          <Dropdown.ItemText>Text</Dropdown.ItemText>
          <Dropdown.Divider />
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item>Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
```
