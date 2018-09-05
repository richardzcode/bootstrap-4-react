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
