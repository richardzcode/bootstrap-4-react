import React, { Component } from 'react';

import { domStack } from './common';

class Form extends Component {
  render() {
    return <form {...this.props}>{this.props.children}</form>
  }
}

export default domStack(Form);
