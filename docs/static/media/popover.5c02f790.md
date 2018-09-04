## Popover

Adding Bootstrap popovers, like those found in iOS, to any element on your site.

```
renderComp: popover_1
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('#popoverExample'), 2000);
  }

  render() {
    const popover = {
      title: 'Popover title',
      content: 'And here is some amazing content. It is very engaging. Right?'
    }

    return (
      <Button lg danger popover={popover} id="popoverExample">
        Click to toggle popover
      </Button>
    )
  }
}
```

### For directions

Four options are available: top, right, bottom, and left aligned.

```
renderComp: popover_2
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('.popover-directions'), 2000);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          secondary
          popover={{ placement: 'top', content: 'On top' }}
          className='popover-directions'
        >
          Popover on top
        </Button>
        <Button
          secondary
          popover={{ placement: 'right', content: 'On right' }}
          className='popover-directions'
        >
          Popover on right
        </Button>
        <Button
          secondary
          popover={{ placement: 'bottom', content: 'On bottom' }}
          className='popover-directions'
        >
          Popover on bottom
        </Button>
        <Button
          secondary
          popover={{ placement: 'left', content: 'On left' }}
          className='popover-directions'
        >
          Popover on left
        </Button>
      </React.Fragment>
    )
  }
}
```

### Dismiss on next click

Dismiss popovers on the next click of a different element than the toggle element.

```
renderComp: popover_3
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('.popover-directions', { trigger: 'focus' }), 2000);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          secondary
          popover={{ placement: 'top', content: 'On top' }}
          className='popover-directions'
        >
          Popover on top
        </Button>
        <Button
          secondary
          popover={{ placement: 'right', content: 'On right' }}
          className='popover-directions'
        >
          Popover on right
        </Button>
        <Button
          secondary
          popover={{ placement: 'bottom', content: 'On bottom' }}
          className='popover-directions'
        >
          Popover on bottom
        </Button>
        <Button
          secondary
          popover={{ placement: 'left', content: 'On left' }}
          className='popover-directions'
        >
          Popover on left
        </Button>
      </React.Fragment>
    )
  }
}
```
