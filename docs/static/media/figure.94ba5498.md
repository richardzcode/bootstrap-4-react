## Figure

```
import React, { Component } from 'react';
import { Figure } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Figure>
        <Figure.Image src="https://github.com/fluidicon.png" />
        <Figure.Caption text="right">A caption for above image</Figure.Caption>
      </Figure>
    )
  }
}
```
