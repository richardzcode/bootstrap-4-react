import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('.popover-example'), 2000);
  }

  render() {
    const popover = {
      title: 'Popover title',
      content: 'And here is some amazing content. It is very engaging. Right?'
    }

    return (
      <React.Fragment>
        <p>These two buttons are equivalent</p>
        <Button lg danger popover={popover} className="popover-example">
          Click to toggle popover
        </Button>
        <button
          className="btn-lg btn btn-danger popover-example"
          data-toggle="popover"
          title="Popover title"
          data-content="And here is some amazing content. It is very engaging. Right?"
        >
          Click to toggle popover
        </button>
      </React.Fragment>
    )
  }
}
