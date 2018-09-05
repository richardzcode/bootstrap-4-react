## Vertical alignment

Easily change the vertical alignment of inline, inline-block, inline-table, and table cell elements.

Choose from `baseline`, `top`, `middle`, `bottom`, `text-bottom`, and `text-top` as needed.

```
renderComp: vertical_align_1
import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BSpan align="baseline">baseline</BSpan>{' '}
        <BSpan align="top">top</BSpan>{' '}
        <BSpan align="middle">middle</BSpan>{' '}
        <BSpan align="bottom">bottom</BSpan>{' '}
        <BSpan align="text-top">text-top</BSpan>{' '}
        <BSpan align="text-bottom">text-bottom</BSpan>{' '}
      </React.Fragment>
    )
  }
}
```

with table cells:

```
renderComp: vertical_align_2
import React, { Component } from 'react';
import { BTd } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <table style={{ height: '100px' }}>
        <tbody>
          <tr>
            <BTd align="baseline">baseline</BTd>
            <BTd align="top">top</BTd>
            <BTd align="middle">middle</BTd>
            <BTd align="bottom">bottom</BTd>
            <BTd align="text-top">text-top</BTd>
            <BTd align="text-bottom">text-bottom</BTd>
          </tr>
        </tbody>
      </table>
    )
  }
}
```
