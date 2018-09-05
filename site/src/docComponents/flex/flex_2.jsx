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
