## Grid

Use Bootstrap powerful mobile-first flexbox grid to build layouts of all shapes and sizes.

```
renderComp: grid_1
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
          <Col col="sm">One of three columns</Col>
        </Row>
      </Container>
    )
  }
}
```

### Equal width columns

```
renderComp: grid_2
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    )
  }
}
```

Equal-width columns can be broken into multiple lines.

```
renderComp: grid_3
import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>Column</Col>
          <Col>Column</Col>
          <BDiv w="100"></BDiv>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
      </Container>
    )
  }
}
```

### Setting one column width

Auto-layout for flexbox grid columns also means you can set the width of one column and have the sibling columns automatically resize around it.

```
renderComp: grid_4
import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>1 of 3</Col>
          <Col col="6">2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col col="5">2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    )
  }
}
```

### Variable width content

Use `{breakpoint}-auto` to size columns based on the natural width of their content.

```
renderComp: grid_5
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row justifyContent="md-center">
          <Col col="col lg-2">1 of 3</Col>
          <Col col="col md-auto">Variable width content</Col>
          <Col col="col lg-2">3 of 3</Col>
        </Row>
        <Row>
          <Col>1 of 3</Col>
          <Col col="col md-auto">Variable width content</Col>
          <Col col="col lg-2">3 of 3</Col>
        </Row>
      </Container>
    )
  }
}
```

### Stacked to horizontal

Using a single set of `sm-` values, you can create a basic grid system that starts out stacked and becomes horizontal at the small breakpoint (sm).

```
renderComp: grid_6
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm-8">col-sm-8</Col>
          <Col col="sm-4">col-sm-4</Col>
        </Row>
        <Row>
          <Col col="sm">col-sm</Col>
          <Col col="sm">col-sm</Col>
          <Col col="sm">col-sm</Col>
        </Row>
      </Container>
    )
  }
}
```

### Mix and match

Do not want your columns to simply stack in some grid tiers? Use a combination of different values for each tier as needed.

```
renderComp: grid_7
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Col col="12 md-8">col-12 col-md-8</Col>
          <Col col="6 md-4">col-6 col-md-4</Col>
        </Row>
        <Row>
        {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
          <Col col="col-6 md-4">col-6 col-md-4</Col>
          <Col col="col-6 md-4">col-6 col-md-4</Col>
          <Col col="col-6 md-4">col-6 col-md-4</Col>
        </Row>
        <Row>
        {/* Columns are always 50% wide, on mobile and desktop */}
          <Col col="6">col-6</Col>
          <Col col="6">col-6</Col>
        </Row>
      </Container>
    )
  }
}
```

### Alignment

Use flexbox alignment utilities to vertically and horizontally align columns.

#### Vertical alignment

```
renderComp: grid_8
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const rowStyle = {
      height: '10rem',
      backgroundColor: 'rgba(255,0,0,.1)',
      marginTop: '1rem'
    };

    return (
      <Container>
        <Row style={rowStyle} alignItems="start">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle} alignItems="center">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle} alignItems="end">
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
          <Col>One of three columns</Col>
        </Row>
        <Row style={rowStyle}>
          <Col alignSelf="start">One of three columns</Col>
          <Col alignSelf="center">One of three columns</Col>
          <Col alignSelf="end">One of three columns</Col>
        </Row>
      </Container>
    )
  }
}
```

#### Horizontal alignment

```
renderComp: grid_9
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const rowStyle = {
      marginTop: '1rem'
    };

    return (
      <Container>
        <Row style={rowStyle} justifyContent="start">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="center">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="end">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="around">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
        <Row style={rowStyle} justifyContent="between">
          <Col col="4">One of two columns</Col>
          <Col col="4">One of two columns</Col>
        </Row>
      </Container>
    )
  }
}
```

### No gutters

The gutters between columns can be removed with `noGutters`. This removes the negative margins from `<Row>` and the horizontal padding from all immediate children columns.

```
renderComp: grid_10
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row noGutters>
          <Col col="12 sm-6 md-8">col-12 col-sm-6 col-md-8</Col>
          <Col col="6 md-4">col-6 col-md-4</Col>
        </Row>
      </Container>
    )
  }
}
```

### Column wrapping

If more than 12 columns are placed within a single row, each group of extra columns will, as one unit, wrap onto a new line.

```
renderComp: grid_11
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="9">col-9</Col>
          <Col col="4">
            col-4<br/>
            Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets wrapped onto a new line as one contiguous unit.
          </Col>
          <Col col="6">
            col-6<br/>
            Subsequent columns continue along the new line.
          </Col>
        </Row>
      </Container>
    )
  }
}
```

### Column breaks

Breaking columns to a new line in flexbox requires a small hack: add an element with `width: 100%` wherever you want to wrap your columns to a new line.

```
renderComp: grid_12
import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="6 sm-3">col-6 col-sm-3</Col>
          <Col col="6 sm-3">col-6 col-sm-3</Col>

          {/* Force next columns to break to new line */}
          <BDiv w="100"></BDiv>

          <Col col="6 sm-3">col-6 col-sm-3</Col>
          <Col col="6 sm-3">col-6 col-sm-3</Col>
        </Row>
      </Container>
    )
  }
}
```

You may also apply this break at specific breakpoints with our responsive display utilities.

```
renderComp: grid_13
import React, { Component } from 'react';
import { Container, Row, Col, BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="6 sm-4">col-6 col-sm-4</Col>
          <Col col="6 sm-4">col-6 col-sm-4</Col>

          {/* Force next columns to break to new line at md breakpoint and up */}
          <BDiv w="100" display="none md-block"></BDiv>

          <Col col="6 sm-4">col-6 col-sm-4</Col>
          <Col col="6 sm-4">col-6 col-sm-4</Col>
        </Row>
      </Container>
    )
  }
}
```

### Reordering

Use `order-` attribute for controlling the visual order of your content. This attribute is responsive, so you can set the order by breakpoint (e.g., order-1order-md-2). Includes support for 1 through 12 across all five grid tiers.

`order-first` and `order-last` change the order of an component by applying order: -1 and order: 13 (order: $columns + 1), respectively.

```
renderComp: grid_14
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>First, but unordered</Col>
          <Col order="12">Second, but last</Col>
          <Col order="1">Third, but first</Col>
        </Row>
        <Row>
          <Col order="last">First, but last</Col>
          <Col>Second, but unordered</Col>
          <Col order="first">Third, but first</Col>
        </Row>
      </Container>
    )
  }
}
```

### Offsetting columns

You can offset grid columns in two ways: responsive `offset` attributes, and margin utilities.

#### Offset attributes

For example, `offset-md-4` moves column over four columns.

In addition to column clearing at responsive breakpoints, you may need to reset offsets.

```
renderComp: grid_15
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="md-4">col-md-4</Col>
          <Col col="md-4" offset="md-4">col-md-4 offset-md-4</Col>
        </Row>
        <Row>
          <Col col="md-3">col-md-3</Col>
          <Col col="md-3" offset="md-3">col-md-3 offset-md-3</Col>
        </Row>
        <Row>
          <Col col="md-6" offset="md-3">col-md-6 offset-md-3</Col>
        </Row>
        <Row>
          <Col col="sm-5 md-6">col-sm-5 col-md-6</Col>
          <Col col="sm-5 md-6" offset="sm-2 md-0">col-sm5 offset-sm-2 col-md-6 offset-md-0</Col>
        </Row>
        <Row>
          <Col col="sm-6 md-5 lg-6">col-sm-6 col-md-5 col-lg-6</Col>
          <Col col="sm-6 md-5 lg-6" offset="md-2 lg-0">col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0</Col>
        </Row>
      </Container>
    )
  }
}
```

#### Margin utilities

You can use margin utilities like `mr-auto` to force sibling columns away from one another.

```
renderComp: grid_16
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="md-4">col-md-4</Col>
          <Col col="md-4" ml="auto">col-md-4 ml-auto</Col>
        </Row>
        <Row>
          <Col col="md-3" ml="md-auto">col-md-3 ml-md-auto</Col>
          <Col col="md-3" ml="md-auto">col-md-3 ml-md-auto</Col>
        </Row>
        <Row>
          <Col col="auto" mr="auto">col-auto mr-auto</Col>
          <Col col="auto">col-auto</Col>
        </Row>
      </Container>
    )
  }
}
```

### Nesting

```
renderComp: grid_17
import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col col="sm-9">
            Level 1: col-sm-9
            <Row>
              <Col col="8 sm-6">Level 2: col-8 col-sm-6</Col>
              <Col col="4 sm-6">Level 2: col-4 col-sm-6</Col>
            </Row>
          </Col>
        </Row>
      </Container>
    )
  }
}
```
