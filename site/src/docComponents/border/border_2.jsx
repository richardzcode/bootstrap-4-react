import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      display: 'inline-block',
      width: '5rem',
      height: '5rem',
      margin: '.25rem',
      backgroundColor: '#f5f5f5',
      border: '1px solid #dee2e6'
    }

    return (
      <React.Fragment>
        <BSpan style={boxStyle} border="0" />
        <BSpan style={boxStyle} border="top-0" />
        <BSpan style={boxStyle} border="right-0" />
        <BSpan style={boxStyle} border="bottom-0" />
        <BSpan style={boxStyle} border="left-0" />
      </React.Fragment>
    )
  }
}
