import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

class Textarea extends Component {
  render() {
    const { htmlDisabled } = this.props;
    const p = JS.lessProps(this.props, 'htmlDisabled');

    return htmlDisabled
      ? <textarea {...p} disabled>{this.props.children}</textarea>
      : <textarea {...p}>{this.props.children}</textarea>
  }
}

export default stack(Textarea, domStack);
