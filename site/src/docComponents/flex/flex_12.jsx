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
