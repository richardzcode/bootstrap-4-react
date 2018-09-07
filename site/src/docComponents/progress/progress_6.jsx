import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="25" bg="success"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="50" bg="info"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="75" bg="warning"/>
        </Progress>
        <Progress mb="2">
          <Progress.Bar striped min="0" max="100" now="100" bg="danger"/>
        </Progress>
      </React.Fragment>
    )
  }
}
