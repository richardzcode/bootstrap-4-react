import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.tooltip();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.tooltip('.tooltip-directions'), 2000);
  }

  render() {
    return (
      <div>
        <Button secondary tooltip={{ placement: 'top', title: 'On top' }} className="tooltip-directions">
          Tooltip on top
        </Button>
        <Button secondary tooltip={{ placement: 'right', title: 'On right' }} className="tooltip-directions">
          Tooltip on right
        </Button>
        <Button secondary tooltip={{ placement: 'bottom', title: 'On bottom' }} className="tooltip-directions">
          Tooltip on bottom
        </Button>
        <Button secondary tooltip={{ placement: 'left', title: 'On left' }} className="tooltip-directions">
          Tooltip on left
        </Button>
      </div>
    )
  }
}
