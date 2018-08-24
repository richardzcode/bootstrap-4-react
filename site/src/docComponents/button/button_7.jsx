import React, { Component } from 'react';
import { Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Button primary data-toggle="button" aria-pressed="false">
        Single toggle
      </Button>
    )
  }
}
