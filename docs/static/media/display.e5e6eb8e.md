## Display

Traditional heading elements are designed to work best in the meat of your page content. When you need a heading to stand out, consider using a <b>display heading</b> -- a larger, slightly more opinionated heading style.

```
renderComp: display
import React, { Component } from 'react';
import { Display1, Display2, Display3, Display4 } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Display1>Display 1</Display1>
        <Display2>Display 2</Display2>
        <Display3>Display 3</Display3>
        <Display4>Display 4</Display4>
      </div>
    )
  }
}
```
