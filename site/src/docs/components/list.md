## List

```
import React, { Component } from 'react';
import { List, BA } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <List unstyled>
        <List.Item><BA href="#" text="white">Follow on Twitter</BA></List.Item>
        <List.Item><BA href="#" text="white">Like on Facebook</BA></List.Item>
        <List.Item><BA href="#" text="white">Email me</BA></List.Item>
      </List>
    )
  }
}
```
