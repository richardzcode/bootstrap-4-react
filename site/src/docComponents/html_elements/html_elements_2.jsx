import React, { Component } from 'react';
import { BA, BP } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <BP>
          <BA href="#" preventDefault onClick={() => console.log('The link was clicked.')}>
            Click me
          </BA>
        </BP>
        <BP text="muted">
          This would not work here because server side rendering do not attach events.
          Copy / Paste to your component to see the result.
        </BP>
      </React.Fragment>
    )
  }
}
