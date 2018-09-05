import React, { Component } from 'react';
import { BP } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BP text="primary">text-primary</BP>
        <BP text="secondary">text-secondary</BP>
        <BP text="success">text-success</BP>
        <BP text="danger">text-danger</BP>
        <BP text="warning">text-warning</BP>
        <BP text="info">text-info</BP>
        <BP text="light" bg="dark">text-light</BP>
        <BP text="dark">text-dark</BP>
        <BP text="body">text-body</BP>
        <BP text="muted">text-muted</BP>
        <BP text="white" bg="dark">text-white</BP>
        <BP text="black-50">text-black-50</BP>
        <BP text="white-50" bg="dark">text-white-50</BP>
      </React.Fragment>
    )
  }
}
