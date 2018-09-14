## Introduction

Simpliest way to build frontend with Bootstrap 4 + React.

### Original

This library helps render Bootstrap markups in React. It is original Bootstrap in action. You do not need to learn a new library.

```
renderComp: introduction_1
import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('.popover-example'), 2000);
  }

  render() {
    const popover = {
      title: 'Popover title',
      content: 'And here is some amazing content. It is very engaging. Right?'
    }

    return (
      <React.Fragment>
        <p>These two buttons are equivalent</p>
        <Button lg danger popover={popover} className="popover-example">
          Click to toggle popover
        </Button>
        <button
          className="btn-lg btn btn-danger popover-example"
          data-toggle="popover"
          title="Popover title"
          data-content="And here is some amazing content. It is very engaging. Right?"
        >
          Click to toggle popover
        </button>
      </React.Fragment>
    )
  }
}
```

### Concise

This library helps render Bootstrap markups in React, concisely.

##### bootstrap-4-react

```
renderComp: introduction_2
<Button primary lg>Large button</Button>
```

##### reactstrap

```
<Button color="primary" size="lg">Large button</Button>
```

##### react-bootstrap

```
<Button bsStyle="primary" bsSize="large">Large button</Button>
```
