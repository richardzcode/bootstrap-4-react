## Jumbotron

```
import React, { Component } from 'react';
import { Jumbotron, Display4, Lead, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Jumbotron>
        <Display4>Hello, world</Display4>
        <Lead>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</Lead>
        <hr className="my-4" />
        <Button primary lg>Learn more</Button>
      </Jumbotron>
    )
  }
}
```
