import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv float="left">Float left on all viewport sizes</BDiv>
        <br />
        <BDiv float="right">Float right on all viewport sizes</BDiv>
        <br />
        <BDiv float="none">Do not float on all viewport sizes</BDiv>
      </div>
    )
  }
}
