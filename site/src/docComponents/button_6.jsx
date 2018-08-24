import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg disabled>Primary button</Button>
        <Button secondary lg disabled>Button</Button>
        <Button primary lg disabled as="a" href="#">Primary link</Button>
        <Button secondary lg disabled as="a" href="#">Link</Button>
      </div>
    )
  }
}
