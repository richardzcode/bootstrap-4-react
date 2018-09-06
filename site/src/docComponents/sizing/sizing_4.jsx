import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const containerStyle = {
      height: '100px',
      backgroundColor: 'rgba(255,0,0,0.1)'
    }
    const boxStyle = {
      width: '100px',
      height: '200px',
      backgroundColor: 'rgba(0,0,255,0.1)'
    }

    return (
      <BDiv style={containerStyle}>
        <BDiv mh="100" style={boxStyle}>Max-height 100%</BDiv>
      </BDiv>
    )
  }
}
