## Quick start


### Install via NPM

No additional CSS/JS needed.

```
npm install --save bootstrap-4-react
```

### Import into component

```
renderComp:quick_start
import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Alert primary>Primary Alert</Alert>
        <Alert secondary>Secondary Alert</Alert>
      </div>
    )
  }
}
```
