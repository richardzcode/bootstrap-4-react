import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Textarea extends Component {
  render() {
    return <textarea {...this.props}>{this.props.children}</textarea>
  }
}

export default stack(Textarea, domStack);
