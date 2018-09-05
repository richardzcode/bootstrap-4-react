import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      display: 'inline-block',
      width: '5rem',
      height: '5rem',
      margin: '.25rem',
      backgroundColor: '#f5f5f5'
    }

    return (
      <React.Fragment>
        <BSpan style={boxStyle} border />
        <BSpan style={boxStyle} border="top" />
        <BSpan style={boxStyle} border="right" />
        <BSpan style={boxStyle} border="bottom" />
        <BSpan style={boxStyle} border="left" />
      </React.Fragment>
    )
  }
}
