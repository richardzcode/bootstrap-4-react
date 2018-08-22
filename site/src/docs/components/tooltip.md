## Tooltip

```
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  componentDidMount() {
    Bootstrap.tooltip(); // enable tooltips
  }

  render() {
    return (
      <div>
        <Button secondary tooltip={{ placement: 'top', title: 'On top' }}>
          Tooltip on top
        </Button>
        <Button secondary tooltip={{ placement: 'right', title: 'On right' }}>
          Tooltip on right
        </Button>
        <Button secondary tooltip={{ placement: 'bottom', title: 'On bottom' }}>
          Tooltip on bottom
        </Button>
        <Button secondary tooltip={{ placement: 'left', title: 'On left' }}>
          Tooltip on left
        </Button>
        <Button secondary tooltip={{ html: '<em>Tooltip</em> <u>with</u> <b>HTML</b>' }}>
          Tooltip with HTML
        </Button>
      </div>
    )
  }
}
```
