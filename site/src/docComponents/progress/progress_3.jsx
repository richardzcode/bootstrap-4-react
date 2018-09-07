import React, { Component } from 'react';
import { Progress } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Progress mb="2" style={{ height: '1px' }}>
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
        <Progress mb="2" style={{ height: '20px' }}>
          <Progress.Bar min="0" max="100" now="25" />
        </Progress>
      </React.Fragment>
    )
  }
}
