## Flex

```
import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv display="flex" flex="column md-column-reverse" bg="light">
          <BDiv p="2" bg="dark" text="white">Flex item 1</BDiv>
          <BDiv p="2" bg="dark" text="white">Flex item 2</BDiv>
          <BDiv p="2" bg="dark" text="white">Flex item 3</BDiv>
        </BDiv>
        <BDiv display="flex" justifyContent="start md-end lg-between" bg="light">
          <BDiv p="2" bg="dark" text="white">Flex item</BDiv>
          <BDiv p="2" bg="dark" text="white">Flex item</BDiv>
          <BDiv p="2" bg="dark" text="white">Flex item</BDiv>
        </BDiv>
      </div>
    )
  }
}
```
