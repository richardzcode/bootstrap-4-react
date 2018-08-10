import React, { Component } from 'react';

import { domStack } from './common';

class Figure extends Component {
  render() {
    return <figure {...this.props}>{this.props.children}</figure>
  }
}

export default domStack(Figure);
