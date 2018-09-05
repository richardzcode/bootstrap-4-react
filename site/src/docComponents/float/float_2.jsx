import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <BDiv float="none sm-right">Float right on size SM or wider</BDiv>
        <br />
        <BDiv float="none md-right">Float right on size MD or wider</BDiv>
        <br />
        <BDiv float="none lg-right">Float right on size LG or wider</BDiv>
        <br />
        <BDiv float="none xl-right">Float right on size XL or wider</BDiv>
      </div>
    )
  }
}
