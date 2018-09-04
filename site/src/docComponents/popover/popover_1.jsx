import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('#popoverExample'), 2000);
  }

  render() {
    const popover = {
      title: 'Popover title',
      content: 'And here is some amazing content. It is very engaging. Right?'
    }

    return (
      <Button lg danger popover={popover} id="popoverExample">
        Click to toggle popover
      </Button>
    )
  }
}
