import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Form extends Component {
  render() {
    return <form {...this.props}>{this.props.children}</form>
  }
}

export default stack(Form, domStack);
