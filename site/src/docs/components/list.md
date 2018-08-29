## List

### Unstyled

Remove the default list-style and left margin on list items (immediate children only). This only applies to immediate children list items, meaning you will need to add the class for any nested lists as well.

```
renderComp: list_1
import React, { Component } from 'react';
import { List } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List unstyled>
        <List.Item>Lorem ipsum dolor sit amet</List.Item>
        <List.Item>Consectetur adipiscing elit</List.Item>
        <List.Item>Integer molestie lorem at massa</List.Item>
        <List.Item>Facilisis in pretium nisl aliquet</List.Item>
        <List.Item>Nulla volutpat aliquam velit
          <List>
            <List.Item>Phasellus iaculis neque</List.Item>
            <List.Item>Purus sodales ultricies</List.Item>
            <List.Item>Vestibulum laoreet porttitor sem</List.Item>
            <List.Item>Ac tristique libero volutpat at</List.Item>
          </List>
        </List.Item>
        <List.Item>Faucibus porta lacus fringilla vel</List.Item>
        <List.Item>Aenean sit amet erat nunc</List.Item>
        <List.Item>Eget porttitor lorem</List.Item>
      </List>
    )
  }
}
```

### Inline

```
renderComp: list_2
import React, { Component } from 'react';
import { List } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List inline>
        <List.Item inline>Lorem ipsum</List.Item>
        <List.Item inline>Phasellus iaculis</List.Item>
        <List.Item inline>Nulla volutpat</List.Item>
      </List>
    )
  }
}
```
