import React, { Component } from 'react';
import { BTd } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <table style={{ height: '100px' }}>
        <tbody>
          <tr>
            <BTd align="baseline">baseline</BTd>
            <BTd align="top">top</BTd>
            <BTd align="middle">middle</BTd>
            <BTd align="bottom">bottom</BTd>
            <BTd align="text-top">text-top</BTd>
            <BTd align="text-bottom">text-bottom</BTd>
          </tr>
        </tbody>
      </table>
    )
  }
}
