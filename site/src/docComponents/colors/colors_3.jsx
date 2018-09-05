import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BDiv p="3" mb="2" bg="primary" text="white">bg-primary</BDiv>
        <BDiv p="3" mb="2" bg="secondary" text="white">bg-secondary</BDiv>
        <BDiv p="3" mb="2" bg="success" text="white">bg-success</BDiv>
        <BDiv p="3" mb="2" bg="danger" text="white">bg-danger</BDiv>
        <BDiv p="3" mb="2" bg="warning" text="dark">bg-warning</BDiv>
        <BDiv p="3" mb="2" bg="info" text="white">bg-info</BDiv>
        <BDiv p="3" mb="2" bg="light" text="dark">bg-light</BDiv>
        <BDiv p="3" mb="2" bg="dark" text="white">bg-dark</BDiv>
        <BDiv p="3" mb="2" bg="white" text="dark">bg-white</BDiv>
        <BDiv p="3" mb="2" bg="transparent" text="dark">bg-transparent</BDiv>
      </React.Fragment>
    )
  }
}
