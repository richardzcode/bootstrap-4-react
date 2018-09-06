import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BSpan display="inline" p="2" bg="primary" text="white">d-inline</BSpan>
        <BSpan display="inline" p="2" bg="dark" text="white">d-inline</BSpan>
        <BSpan display="block" p="2" bg="primary" text="white">d-block</BSpan>
        <BSpan display="block" p="2" bg="dark" text="white">d-block</BSpan>
      </React.Fragment>
    )
  }
}
