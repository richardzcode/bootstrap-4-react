import React, { Component } from 'react';
import Bootstrap, { Button } from 'bootstrap-4-react';

export default class App extends Component {
  // A workaround since documentation pages are server-side-rendered
  // In most projects can be:
  // componentDidMount() {
  //   Bootstrap.popover();
  // }
  componentWillMount() {
    window.setTimeout(() => Bootstrap.popover('.popover-directions', { trigger: 'focus' }), 2000);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          secondary
          popover={{ placement: 'top', content: 'On top' }}
          className='popover-directions'
        >
          Popover on top
        </Button>
        <Button
          secondary
          popover={{ placement: 'right', content: 'On right' }}
          className='popover-directions'
        >
          Popover on right
        </Button>
        <Button
          secondary
          popover={{ placement: 'bottom', content: 'On bottom' }}
          className='popover-directions'
        >
          Popover on bottom
        </Button>
        <Button
          secondary
          popover={{ placement: 'left', content: 'On left' }}
          className='popover-directions'
        >
          Popover on left
        </Button>
      </React.Fragment>
    )
  }
}
