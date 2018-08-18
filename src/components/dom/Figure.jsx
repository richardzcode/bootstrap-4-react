import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Figure extends Component {
  render() {
    return <figure {...this.props}>{this.props.children}</figure>
  }
}

export default stack(Figure, domStack);
