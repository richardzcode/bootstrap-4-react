import React, { Component } from 'react';
import { Blockquote } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Blockquote>
        <p className="mb-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
        </p>
        <Blockquote.Footer>
          Someone famous in <cite title="Source Title">Source Title</cite>
        </Blockquote.Footer>
      </Blockquote>
    )
  }
}
