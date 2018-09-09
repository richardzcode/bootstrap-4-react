import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Svg extends Component {
  render() {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" {...this.props}>
        {this.props.children}
      </svg>
    )
  }
}

export default stack(Svg, domStack);
