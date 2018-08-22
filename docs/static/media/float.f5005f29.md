## Float

```
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv float="none sm-right">Float on size SM or wider</BDiv>
        <BDiv float="none md-right">Float on size MD or wider</BDiv>
        <BDiv float="none lg-right">Float on size LG or wider</BDiv>
        <BDiv float="none xl-right">Float on size XL or wider</BDiv>
      </div>
    )
  }
}
```
