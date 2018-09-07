import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="0" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="50" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="75" />
        </Progress>
        <Progress mb="2">
          <Progress.Bar min="0" max="100" now="100" />
        </Progress>
      </React.Fragment>
    )
  }
}
