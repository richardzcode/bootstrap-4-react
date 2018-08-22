## Popover

```
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  componentDidMount() {
    Bootstrap.popover(); // enable popovers
  }

  render() {
    return (
      <div>
        <Button secondary popover={{ placement: 'top', title: 'Title', content: 'On top' }}>
          Popover on top
        </Button>
        <Button secondary popover={{ placement: 'right', content: 'On right' }}>
          Popover on right
        </Button>
        <Button secondary popover={{ placement: 'bottom', content: 'On bottom' }}>
          Popover on bottom
        </Button>
        <Button secondary popover={{ placement: 'left', content: 'On left' }}>
          Popover on left
        </Button>
        <Button secondary popover={{ dismissible: true, html: '<em>Popover</em> <u>with</u> <b>HTML</b>' }}>
          Popover with HTML
        </Button>
      </div>
    )
  }
}
```
