import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Progress>
        <Progress.Bar min="0" max="100" now="25">25%</Progress.Bar>
      </Progress>
    )
  }
}
