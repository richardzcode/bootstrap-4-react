import React, { Component } from 'react';
import { Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Badge pill primary>Primary</Badge>
        <Badge pill secondary>Secondary</Badge>
        <Badge pill success>Success</Badge>
        <Badge pill danger>Danger</Badge>
        <Badge pill warning>Warning</Badge>
        <Badge pill info>Info</Badge>
        <Badge pill light>Light</Badge>
        <Badge pill dark>Dark</Badge>
      </div>
    )
  }
}
