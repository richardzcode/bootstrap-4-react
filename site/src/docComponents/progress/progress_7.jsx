import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Progress mb="2">
        <Progress.Bar striped animated min="0" max="100" now="75" />
      </Progress>
    )
  }
}
