import React, { Component } from 'react';

import { domStack } from './common';

class Textarea extends Component {
  render() {
    return <textarea {...this.props}>{this.props.children}</textarea>
  }
}

export default domStack(Textarea);
