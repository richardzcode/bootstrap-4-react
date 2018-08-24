import React, { Component } from 'react';
import { Alert } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Alert primary>Primary Alert</Alert>
        <Alert secondary>Secondary Alert</Alert>
        <Alert success>Success Alert</Alert>
        <Alert danger>Danger Alert</Alert>
        <Alert warning>Warning Alert</Alert>
        <Alert info>Info Alert</Alert>
        <Alert light>Light Alert</Alert>
        <Alert dark>Dark Alert</Alert>
      </div>
    )
  }
}
