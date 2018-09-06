## Sizing

Easily make an element as wide or as tall (relative to its parent) with width and height utilities.

```
renderComp: sizing_1
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: '#eee'
    }

    return (
      <React.Fragment>
        <BDiv w="25" p="3" style={boxStyle}>Width 25%</BDiv>
        <BDiv w="50" p="3" style={boxStyle}>Width 50%</BDiv>
        <BDiv w="75" p="3" style={boxStyle}>Width 75%</BDiv>
        <BDiv w="100" p="3" style={boxStyle}>Width 100%</BDiv>
        <BDiv w="auto" p="3" style={boxStyle}>Width auto</BDiv>
      </React.Fragment>
    )
  }
}
```

```
renderComp: sizing_2
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const containerStyle = {
      height: '100px',
      backgroundColor: 'rgba(255,0,0,.1)'
    }
    const boxStyle = {
      width: '120px',
      backgroundColor: 'rgba(0,0,255,.1)'
    }

    return (
      <BDiv style={containerStyle}>
        <BDiv display="inline-block" h="25" p="3" mx="1" align="top" style={boxStyle}>Height 25%</BDiv>
        <BDiv display="inline-block" h="50" p="3" mx="1" align="top" style={boxStyle}>Height 50%</BDiv>
        <BDiv display="inline-block" h="75" p="3" mx="1" align="top" style={boxStyle}>Height 75%</BDiv>
        <BDiv display="inline-block" h="100" p="3" mx="1" align="top" style={boxStyle}>Height 100%</BDiv>
        <BDiv display="inline-block" h="auto" p="3" mx="1" align="top" style={boxStyle}>Height auto</BDiv>
      </BDiv>
    )
  }
}
```

You can also use `max-width: 100%` and `max-height: 100%` as needed

```
renderComp: sizing_3
import React, { Component } from 'react';
import { BImg } from 'bootstrap-4-react';

const img_src = 'data:image/svg+xml;charset=UTF-8,<svg%20width%3D"655"%20height%3D"100"%20xmlns%3D"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg"%20viewBox%3D"0%200%20655%20100"%20preserveAspectRatio%3D"none"><defs><style%20type%3D"text%2Fcss">%23holder_165b004bb6c%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A33pt%20%7D%20<%2Fstyle><%2Fdefs><g%20id%3D"holder_165b004bb6c"><rect%20width%3D"655"%20height%3D"100"%20fill%3D"%23777"><%2Frect><g><text%20x%3D"145.9140625"%20y%3D"65.15">Max-width%20%3D%20100%25<%2Ftext><%2Fg><%2Fg><%2Fsvg>'

export default class App extends Component {
  render() {
    return (
      <BImg mw="100" src={img_src} />
    )
  }
}
```

```
renderComp: sizing_4
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const containerStyle = {
      height: '100px',
      backgroundColor: 'rgba(255,0,0,0.1)'
    }
    const boxStyle = {
      width: '100px',
      height: '200px',
      backgroundColor: 'rgba(0,0,255,0.1)'
    }

    return (
      <BDiv style={containerStyle}>
        <BDiv mh="100" style={boxStyle}>Max-height 100%</BDiv>
      </BDiv>
    )
  }
}
```
