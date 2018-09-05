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
        <BSpan style={boxStyle} border="primary" />
        <BSpan style={boxStyle} border="secondary" />
        <BSpan style={boxStyle} border="success" />
        <BSpan style={boxStyle} border="danger" />
        <BSpan style={boxStyle} border="warning" />
        <BSpan style={boxStyle} border="info" />
        <BSpan style={boxStyle} border="light" />
        <BSpan style={boxStyle} border="dark" />
        <BSpan style={boxStyle} border="white" />
      </React.Fragment>
    )
  }
}
