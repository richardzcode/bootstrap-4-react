import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv shadow="none" p="3" mb="5" bg="light" rounded>No shadow</BDiv>
        <BDiv shadow="sm" p="3" mb="5" bg="light" rounded>Small shadow</BDiv>
        <BDiv shadow p="3" mb="5" bg="light" rounded>Regular shadow</BDiv>
        <BDiv shadow="lg" p="3" mb="5" bg="light" rounded>Large shadow</BDiv>
      </React.Fragment>
    )
  }
}
