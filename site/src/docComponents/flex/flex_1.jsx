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
        <BDiv display="flex" p="2" mb="3" style={boxStyle}>
          I'm a flexbox container!
        </BDiv>
        <BDiv display="inline-flex" p="2" style={boxStyle}>
          I'm a inline flexbox container!
        </BDiv>
      </React.Fragment>
    )
  }
}
