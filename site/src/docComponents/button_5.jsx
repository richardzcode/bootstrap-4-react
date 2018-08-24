import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg active as="a" href="#">Primary link</Button>
        <Button secondary lg active as="a" href="#">Link</Button>
      </div>
    )
  }
}
