import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class FigureCaption extends Component {
  render() {
    return <figcaption {...this.props}>{this.props.children}</figcaption>
  }
}

export default stack(FigureCaption, domStack);
