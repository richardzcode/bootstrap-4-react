## Float

Toggle floats on any element, across any breakpoint, using responsive float utilities.

```
renderComp: float_1
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv float="left">Float left on all viewport sizes</BDiv>
        <br />
        <BDiv float="right">Float right on all viewport sizes</BDiv>
        <br />
        <BDiv float="none">Do not float on all viewport sizes</BDiv>
      </div>
    )
  }
}
```

### Responsive

Responsive variations also exist for each `float` value.

* `left` | `right` | `none`
* `sm-left` | `sm-right` | `sm-none`
* `md-left` | `md-right` | `md-none`
* `lg-left` | `lg-right` | `lg-none`
* `xl-left` | `xl-right` | `xl-none`

```
renderComp: float_2
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv float="none sm-right">Float right on size SM or wider</BDiv>
        <br />
        <BDiv float="none md-right">Float right on size MD or wider</BDiv>
        <br />
        <BDiv float="none lg-right">Float right on size LG or wider</BDiv>
        <br />
        <BDiv float="none xl-right">Float right on size XL or wider</BDiv>
      </div>
    )
  }
}
```
