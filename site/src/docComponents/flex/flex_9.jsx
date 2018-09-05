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
