import React, { Component } from 'react';
import { BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BSpan align="baseline">baseline</BSpan>{' '}
        <BSpan align="top">top</BSpan>{' '}
        <BSpan align="middle">middle</BSpan>{' '}
        <BSpan align="bottom">bottom</BSpan>{' '}
        <BSpan align="text-top">text-top</BSpan>{' '}
        <BSpan align="text-bottom">text-bottom</BSpan>{' '}
      </React.Fragment>
    )
  }
}
