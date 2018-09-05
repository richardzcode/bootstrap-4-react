import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      width: '8rem'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" flex="nowrap" alignItems="start"  mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap" alignItems="end"  mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" flex="wrap-reverse" alignItems="end"  mb="3" style={boxStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
