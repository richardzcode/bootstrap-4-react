import React, { Component } from 'react';

import { domStack } from './common';

class FigureCaption extends Component {
  render() {
    return <figcaption {...this.props}>{this.props.children}</figcaption>
  }
}

export default domStack(FigureCaption);
