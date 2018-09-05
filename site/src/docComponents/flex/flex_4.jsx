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
