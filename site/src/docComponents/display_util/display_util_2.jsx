import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="lg-none">hide on screens wider than lg</BDiv>
        <BDiv display="none lg-block">hide on screens smaller than lg</BDiv>
      </React.Fragment>
    )
  }
}
