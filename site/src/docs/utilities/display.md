## Display

Quickly and responsively toggle the display value of components and more with display utilities. 

Modifiers are named using the format:

* `{value}` for `xs`
* `{breakpoint}-{value}` for `sm`, `md`, `lg`, and `xl`.

Where <i>value</i> is one of:

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

The media queries effect screen widths with the given breakpoint or `larger`. For example, `lg-none` sets `display: none;` on both `lg` and `xl` screens.

```
renderComp: display_util_1
import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BSpan display="inline" p="2" bg="primary" text="white">d-inline</BSpan>
        <BSpan display="inline" p="2" bg="dark" text="white">d-inline</BSpan>
        <BSpan display="block" p="2" bg="primary" text="white">d-block</BSpan>
        <BSpan display="block" p="2" bg="dark" text="white">d-block</BSpan>
      </React.Fragment>
    )
  }
}
```

### Hiding elements

For faster mobile-friendly development, use responsive display modifiers for showing and hiding elements by device. Avoid creating entirely different versions of the same site, instead hide element responsively for each screen size.

To hide elements simply use the `none` modifier or one of the `{sm,md,lg,xl}-none` modifiers for any responsive screen variation.

| Screen Size | Modifier |
| --- | --- |
| Hidden on all | `"none"` |
| Hidden only on xs | `"none sm-block"` |
| Hidden only on sm | `"sm-none md-block"` |
| Hidden only on md | `"md-none lg-block"` |
| Hidden only on lg | `"lg-none xl-block"` |
| Hidden only on xl | `"xl-none"` |
| Visible on all | `"block"` |
| Visible only on xs | `"block sm-none"` |
| Visible only on sm | `"none sm-block md-none"` |
| Visible only on md | `"none md-block lg-none"` |
| Visible only on lg | `"none lg-block xl-none"` |
| Visible only on xl | `"none xl-block"` |

```
renderComp: display_util_2
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="lg-none">hide on screens wider than lg</BDiv>
        <BDiv display="none lg-block">hide on screens smaller than lg</BDiv>
      </React.Fragment>
    )
  }
}
```

### Display in print

Change the `display` value of components when printing with print display modifiers.

* `print-none`
* `print-inline`
* `print-inline-block`
* `print-block`
* `print-table`
* `print-table-row`
* `print-table-cell`
* `print-flex`
* `print-inline-flex`

```
renderComp: display_util_3
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="print-none">Screen Only (Hide on print only)</BDiv>
        <BDiv display="none print-block">Print Only (Hide on screen only)</BDiv>
        <BDiv display="none lg-block print-block">Hide up to large on screen, but always show on print</BDiv>
      </React.Fragment>
    )
  }
}
```
