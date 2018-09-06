import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    const boxStyle = {
      backgroundColor: '#eee'
    }

    return (
      <React.Fragment>
        <BDiv w="25" p="3" style={boxStyle}>Width 25%</BDiv>
        <BDiv w="50" p="3" style={boxStyle}>Width 50%</BDiv>
        <BDiv w="75" p="3" style={boxStyle}>Width 75%</BDiv>
        <BDiv w="100" p="3" style={boxStyle}>Width 100%</BDiv>
        <BDiv w="auto" p="3" style={boxStyle}>Width auto</BDiv>
      </React.Fragment>
    )
  }
}
