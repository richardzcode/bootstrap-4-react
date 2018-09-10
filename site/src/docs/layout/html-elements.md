## HTML elements

`bootstrap-4-react` wraps basic HTML elements into React components like `<BDiv>`, to make it easier to apply Bootstrap utilities.

```
renderComp: html_elements_1
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <BDiv bg="primary" text="center white" p="5">Text inside BDiv</BDiv>
    )
  }
}
```

### preventDefault

In React you must call `preventDefault` to [prevent the default link behavior](https://reactjs.org/docs/handling-events.html). Use `<BA>` with `preventDefault` to simplify `onClick` event handling.

```
renderComp: html_elements_2
import React, { Component } from 'react';
import { BA, BP } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BP>
          <BA href="#" preventDefault onClick={() => console.log('The link was clicked.')}>
            Click me
          </BA>
        </BP>
        <BP text="muted">
          This would not work here because server side rendering do not attach events.
          Copy / Paste to your component to see the result.
        </BP>
      </React.Fragment>
    )
  }
}
```
