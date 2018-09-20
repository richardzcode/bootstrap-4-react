import React, { Component } from 'react';
import { JS } from 'fsts';

import { stack, domStack } from '../../utilities';

function preventDefaultFn(fn) {
  return function(event) {
    fn(event);
    event.preventDefault();
  }
}

class Form extends Component {
  render() {
    const { preventDefault, onSubmit } = this.props;
    const p = JS.lessProps(this.props, ['preventDefault', 'onSubmit']);

    if (onSubmit) {
      p.onSubmit = preventDefault
        ? preventDefaultFn(onSubmit)
        : onSubmit
    } else {
      if (preventDefault) {
        p.onSubmit = (event) => { event.preventDefault(); };
      }
    }

    return <form {...p}>{this.props.children}</form>
  }
}

export default stack(Form, domStack);
