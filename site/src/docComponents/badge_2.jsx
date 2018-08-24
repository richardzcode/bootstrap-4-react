import React, { Component } from 'react';
import { Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge primary>Primary</Badge>
        <Badge secondary>Secondary</Badge>
        <Badge success>Success</Badge>
        <Badge danger>Danger</Badge>
        <Badge warning>Warning</Badge>
        <Badge info>Info</Badge>
        <Badge light>Light</Badge>
        <Badge dark>Dark</Badge>
      </div>
    )
  }
}
