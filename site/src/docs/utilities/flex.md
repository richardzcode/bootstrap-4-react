## Flex

Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.

### Enable flex behaviors

Apply `display` utilities to create a flexbox container and transform direct children elements into flex items. Flex containers and items are able to be modified further with additional flex properties.

```
renderComp: flex_1
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" p="2" mb="3" style={boxStyle}>
          I'm a flexbox container!
        </BDiv>
        <BDiv display="inline-flex" p="2" style={boxStyle}>
          I'm a inline flexbox container!
        </BDiv>
      </React.Fragment>
    )
  }
}
```

### Direction

Set the direction of flex items in a flex container with direction modifier. In most cases you can omit the horizontal modifier here as the browser default is `row`. However, you may encounter situations where you needed to explicitly set this value (like responsive layouts).

Use `row` to set a horizontal direction (the browser default), or `row-reverse` to start the horizontal direction from the opposite side.

```
renderComp: flex_2
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" flex="row" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item 1</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 2</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 3</BDiv>
        </BDiv>
        <BDiv display="flex" flex="row-reverse" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item 1</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 2</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 3</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Use `column` to set a vertical direction, or `column-reverse` to start the vertical direction from the opposite side.

```
renderComp: flex_3
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" flex="column" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item 1</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 2</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 3</BDiv>
        </BDiv>
        <BDiv display="flex" flex="column-reverse" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item 1</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 2</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item 3</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for flex direction.

* `row` | `row-reverse` | `column` | `column-reverse`
* `sm-row` | `sm-row-reverse` | `sm-column` | `sm-column-reverse`
* `md-row` | `md-row-reverse` | `md-column` | `md-column-reverse`
* `lg-row` | `lg-row-reverse` | `lg-column` | `lg-column-reverse`
* `xl-row` | `xl-row-reverse` | `xl-column` | `xl-column-reverse`

### Justify content

Use `justifyContent` utilities on flexbox containers to change the alignment of flex items on the main axis (the x-axis to start, y-axis if flex-direction: column). Choose from `start` (browser default), `end`, `center`, `between`, or `around`.

```
renderComp: flex_4
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" justifyContent="start" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" justifyContent="end" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" justifyContent="center" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" justifyContent="between" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" justifyContent="around" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for `justifyContent`.

* `start` | `end` | `center` | `between` | `around`
* `sm-start` | `sm-end` | `sm-center` | `sm-between` | `sm-around`
* `md-start` | `md-end` | `md-center` | `md-between` | `md-around`
* `lg-start` | `lg-end` | `lg-center` | `lg-between` | `lg-around`
* `xl-start` | `xl-end` | `xl-center` | `xl-between` | `xl-around`

### Align items

Use `alignItems` utilities on flexbox containers to change the alignment of flex items on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```
renderComp: flex_5
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      height: '100px'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" alignItems="start" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" alignItems="end" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" alignItems="center" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" alignItems="baseline" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" alignItems="stretch" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for `alignItems`.

* `start` | `end` | `center` | `baseline` | `stretch`
* `sm-start` | `sm-end` | `sm-center` | `sm-baseline` | `sm-stretch`
* `md-start` | `md-end` | `md-center` | `md-baseline` | `md-stretch`
* `lg-start` | `lg-end` | `lg-center` | `lg-baseline` | `lg-stretch`
* `xl-start` | `xl-end` | `xl-center` | `xl-baseline` | `xl-stretch`

### Align self

Use `alignSelf` utilities on flexbox items to individually change their alignment on the cross axis (the y-axis to start, x-axis if flex-direction: column). Choose from the same options as `alignItems`: `start`, `end`, `center`, `baseline`, or `stretch` (browser default).

```
renderComp: flex_6
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      height: '100px'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="start" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="end" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="center" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="baseline" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="stretch" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for `alignSelf`.

* `start` | `end` | `center` | `baseline` | `stretch`
* `sm-start` | `sm-end` | `sm-center` | `sm-baseline` | `sm-stretch`
* `md-start` | `md-end` | `md-center` | `md-baseline` | `md-stretch`
* `lg-start` | `lg-end` | `lg-center` | `lg-baseline` | `lg-stretch`
* `xl-start` | `xl-end` | `xl-center` | `xl-baseline` | `xl-stretch`

### Fill

Use the `fill` modifier on a series of sibling elements to force them into equal widths while taking up all available horizontal space. Especially useful for equal-width, or justified, navigation.

```
renderComp: flex_7
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <BDiv display="flex" mb="3" style={boxStyle}>
        <BDiv p="2" flex="fill" style={boxStyle}>Flex item</BDiv>
        <BDiv p="2" flex="fill" style={boxStyle}>Flex item</BDiv>
        <BDiv p="2" flex="fill" style={boxStyle}>Flex item</BDiv>
      </BDiv>
    )
  }
}
```

Responsive variations also exist for `fill`.

* `fill`
* `sm-fill`
* `md-fill`
* `lg-fill`
* `xl-fill`

### Grow and shrink

Use `grow-*` utilities to toggle a flex item’s ability to grow to fill available space. Use `shrink-*` utilities to toggle a flex item’s ability to shrink if necessary.

```
renderComp: flex_8
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" mb="3" style={boxStyle}>
          <BDiv p="2" flex="grow-1" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={boxStyle}>
          <BDiv p="2" w="100" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" flex="shrink-1" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for `grow` and `shrink`.

* `{grow|shrink}-0` | `{grow|shrink}-1`
* `sm-{grow|shrink}-0` | `sm-{grow|shrink}-1`
* `md-{grow|shrink}-0` | `md-{grow|shrink}-1`
* `lg-{grow|shrink}-0` | `lg-{grow|shrink}-1`
* `xl-{grow|shrink}-0` | `xl-{grow|shrink}-1`

### Auto margins

Flexbox can do some pretty awesome things when you mix flex alignments with auto margins. Shown below are three examples of controlling flex items via auto margins: default (no auto margin), pushing two items to the right (`mr="auto"`), and pushing two items to the left (`ml="auto"`).

```
renderComp: flex_9
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <React.Fragment>
        <BDiv display="flex" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={boxStyle}>
          <BDiv p="2" mr="auto" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" ml="auto" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Vertically move one flex item to the top or bottom of a container by mixing `alignItems`, `flex-direction: column`, and `margin-top: auto` or `margin-bottom: auto`.

```
renderComp: flex_10
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      height: '200px'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" flex="column" alignItems="start"  mb="3" style={containerStyle}>
          <BDiv p="2" mb="auto" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="column" alignItems="end"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" mt="auto" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

### Wrap

Change how flex items wrap in a flex container. Choose from no wrapping at all (the browser default) with `nowrap`, wrapping with `wrap`, or reverse wrapping with `wrap-reverse`.

```
renderComp: flex_11
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      width: '8rem'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" flex="nowrap" alignItems="start"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignItems="end"  mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap-reverse" alignItems="end"  mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```

Responsive variations also exist for `flex-wrap`.

* `nowrap` | `wrap` | `wrap-reverse`
* `sm-nowrap` | `sm-wrap` | `sm-wrap-reverse`
* `md-nowrap` | `md-wrap` | `md-wrap-reverse`
* `lg-nowrap` | `lg-wrap` | `lg-wrap-reverse`
* `xl-nowrap` | `xl-wrap` | `xl-wrap-reverse`

### Order

Change the visual order of specific flex items with a handful of `order` utilities. We only provide options for making an item first or last, as well as a reset to use the DOM order.

```
renderComp: flex_12
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    return (
      <BDiv display="flex" flex="nowrap" mb="3" style={boxStyle}>
        <BDiv p="2" order="3" style={boxStyle}>First flex item</BDiv>
        <BDiv p="2" order="2" style={boxStyle}>Second flex item</BDiv>
        <BDiv p="2" order="1" style={boxStyle}>Third flex item</BDiv>
      </BDiv>
    )
  }
}
```

Responsive variations also exist for `order`.

* `0` | `1` | `2` | `3` | `4` | `5` | `6` | `7` | `8` | `9` | `10` | `11` | `12`
* `sm-0` | `sm-1` | `sm-2` | `sm-3` | `sm-4` | `sm-5` | `sm-6` | `sm-7` | `sm-8` | `sm-9` | `sm-10` | `sm-11` | `sm-12`
* `md-0` | `md-1` | `md-2` | `md-3` | `md-4` | `md-5` | `md-6` | `md-7` | `md-8` | `md-9` | `md-10` | `md-11` | `md-12`
* `lg-0` | `lg-1` | `lg-2` | `lg-3` | `lg-4` | `lg-5` | `lg-6` | `lg-7` | `lg-8` | `lg-9` | `lg-10` | `lg-11` | `lg-12`
* `xl-0` | `xl-1` | `xl-2` | `xl-3` | `xl-4` | `xl-5` | `xl-6` | `xl-7` | `xl-8` | `xl-9` | `xl-10` | `xl-11` | `xl-12`

### Align content

Use `alignContent` utilities on flexbox containers to align flex items together on the cross axis. Choose from `start` (browser default), `end`, `center`, `between`, `around`, or `stretch`. To demonstrate these utilities, we have enforced `flex-wrap: wrap` and increased the number of flex items.

```
renderComp: flex_13
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      height: '200px'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" flex="wrap" alignContent="start"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignContent="end"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignContent="center"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignContent="between"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignContent="around"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
```
