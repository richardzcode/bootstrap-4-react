import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv display="print-none">Screen Only (Hide on print only)</BDiv>
        <BDiv display="none print-block">Print Only (Hide on screen only)</BDiv>
        <BDiv display="none lg-block print-block">Hide up to large on screen, but always show on print</BDiv>
      </React.Fragment>
    )
  }
}
