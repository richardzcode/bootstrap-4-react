## Border

Use border utilities to quickly style the border and border-radius of an element.

### Border

Use border utilities to add or remove an element’s borders. Choose from all borders or one at a time.

#### Additive

```
renderComp: border_1
import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      display: 'inline-block',
      width: '5rem',
      height: '5rem',
      margin: '.25rem',
      backgroundColor: '#f5f5f5'
    }

    return (
      <React.Fragment>
        <BSpan style={boxStyle} border />
        <BSpan style={boxStyle} border="top" />
        <BSpan style={boxStyle} border="right" />
        <BSpan style={boxStyle} border="bottom" />
        <BSpan style={boxStyle} border="left" />
      </React.Fragment>
    )
  }
}
```

#### Subtractive

```
renderComp: border_2
import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      display: 'inline-block',
      width: '5rem',
      height: '5rem',
      margin: '.25rem',
      backgroundColor: '#f5f5f5',
      border: '1px solid #dee2e6'
    }

    return (
      <React.Fragment>
        <BSpan style={boxStyle} border="0" />
        <BSpan style={boxStyle} border="top-0" />
        <BSpan style={boxStyle} border="right-0" />
        <BSpan style={boxStyle} border="bottom-0" />
        <BSpan style={boxStyle} border="left-0" />
      </React.Fragment>
    )
  }
}
```

### Border color

Change the border color using utilities built on our theme colors.

```
renderComp: border_3
import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      display: 'inline-block',
      width: '5rem',
      height: '5rem',
      margin: '.25rem',
      backgroundColor: '#f5f5f5'
    }

    return (
      <React.Fragment>
        <BSpan style={boxStyle} border="primary" />
        <BSpan style={boxStyle} border="secondary" />
        <BSpan style={boxStyle} border="success" />
        <BSpan style={boxStyle} border="danger" />
        <BSpan style={boxStyle} border="warning" />
        <BSpan style={boxStyle} border="info" />
        <BSpan style={boxStyle} border="light" />
        <BSpan style={boxStyle} border="dark" />
        <BSpan style={boxStyle} border="white" />
      </React.Fragment>
    )
  }
}
```

### Border-radius

```
renderComp: border_4
import React, { Component } from 'react';
import { BImg } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%2275%22%20height%3D%2275%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2075%2075%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_165aaafcf71%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_165aaafcf71%22%3E%3Crect%20width%3D%2275%22%20height%3D%2275%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2219.34375%22%20y%3D%2242.15%22%3E75x75%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E';

export default class App extends Component {
  render() {
    const boxStyle = {
      margin: '.25rem'
    }

    return (
      <React.Fragment>
        <BImg src={img_src} style={boxStyle} rounded />
        <BImg src={img_src} style={boxStyle} rounded="top" />
        <BImg src={img_src} style={boxStyle} rounded="right" />
        <BImg src={img_src} style={boxStyle} rounded="bottom" />
        <BImg src={img_src} style={boxStyle} rounded="left" />
        <BImg src={img_src} style={boxStyle} rounded="circle" />
        <BImg src={img_src} style={boxStyle} rounded="0" />
      </React.Fragment>
    )
  }
}
```
