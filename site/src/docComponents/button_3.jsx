import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary outline>Primary</Button>
        <Button secondary outline>Secondary</Button>
        <Button success outline>Success</Button>
        <Button danger outline>Danger</Button>
        <Button warning outline>Warning</Button>
        <Button info outline>Info</Button>
        <Button light outline>Light</Button>
        <Button dark outline>Dark</Button>
      </div>
    )
  }
}
