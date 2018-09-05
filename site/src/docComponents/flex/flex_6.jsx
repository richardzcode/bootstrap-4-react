import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: 'rgba(86,61,124,.15)',
      border: '1px solid rgba(86,61,124,.15)'
    }

    const containerStyle = Object.assign({}, boxStyle, {
      height: '100px'
    });

    return (
      <React.Fragment>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="start" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="end" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="center" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" mb="3" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="baseline" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
        <BDiv display="flex" style={containerStyle}>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
          <BDiv p="2" alignSelf="stretch" style={boxStyle}>Aligned flex item</BDiv>
          <BDiv p="2" style={boxStyle}>Flex item</BDiv>
        </BDiv>
      </React.Fragment>
    )
  }
}
