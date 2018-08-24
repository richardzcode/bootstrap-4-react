import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button success>Success</Button>
        <Button danger>Danger</Button>
        <Button warning>Warning</Button>
        <Button info>Info</Button>
        <Button light>Light</Button>
        <Button dark>Dark</Button>
      </div>
    )
  }
}
