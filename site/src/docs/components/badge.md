## Badge

```
import React, { Component } from 'react';
import { Badge, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge primary>Primary</Badge>
        <Button primary>
          Profile <Badge light>9</Badge>
        </Button>
      </div>
    )
  }
}
```
