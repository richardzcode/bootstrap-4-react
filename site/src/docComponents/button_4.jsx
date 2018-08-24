import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Button primary lg>Large button</Button>
        <Button secondary lg>Large button</Button>
        <Button primary sm>Small button</Button>
        <Button secondary sm>Small button</Button>
      </div>
    )
  }
}
