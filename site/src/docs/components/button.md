## Button

```
import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success lg>Success</Button>
        <Button danger block>Danger</Button>
      </div>
    )
  }
}
```
