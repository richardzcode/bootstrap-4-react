import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { BLabel } from '../dom';

class FormCheckLabel extends Component {
  render() {
    return <BLabel {...this.props}>{this.props.children}</BLabel>
  }
}

export default withClassName('form-check-label')(FormCheckLabel);
