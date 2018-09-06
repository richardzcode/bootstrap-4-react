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
