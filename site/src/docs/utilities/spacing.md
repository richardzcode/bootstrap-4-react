## Spacing

Bootstrap includes a wide range of shorthand responsive margin and padding utilities to modify an element appearance.

### Notation

The utilities are named using the format `{property}{sides}={size}` for `xs` and `{property}{sides}={breakpoint}-{size}` for `sm`, `md`, `lg`, and `xl`.

Where <i>property</i> is one of:

* `m` - for utilities that set `margin`
* `p` - for utilities that set `padding`

Where <i>sides</i> is one of:

* `t` - for utilities that set `margin-top` or `padding-top`
* `b` - for utilities that set `margin-bottom` or `padding-bottom`
* `l` - for utilities that set `margin-left` or `padding-left`
* `r` - for utilities that set `margin-right` or `padding-right`
* `x` - for utilities that set both `*-left` and `*-right`
* `y` - for utilities that set both `*-top` and `*-bottom`
* blank - for utilities that set a `margin` or `padding` on all 4 sides of the component

Where <i>size</i> is one of:

* `0` - for utilities that eliminate the `margin` or `padding` by setting it to `0`
* `1` - for utilities that set the `margin` or `padding` to `.25rem`
* `2` - for utilities that set the `margin` or `padding` to `.5rem`
* `3` - for utilities that set the `margin` or `padding` to `1rem`
* `4` - for utilities that set the `margin` or `padding` to `1.5rem`
* `5` - for utilities that set the `margin` or `padding` to `3rem`
* `auto` - for utilities that set the `margin` to auto

### Horizontal centering

`mx="auto"` horizontally centering fixed-width block level content--that is, content that has `display: block` and a width set--by setting the horizontal margins to auto.

```
renderComp: spacing
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <BDiv mx="auto" style={{ width: '200px', backgroundColor: 'rgba(86,61,124,.15)' }}>
        Centered element
      </BDiv>
    )
  }
}
```
