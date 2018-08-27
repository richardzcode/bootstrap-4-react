import React, { Component } from 'react';
import { JS } from 'fsts';

import { withClassName } from '../../utilities';
import { Col } from '../layout';

class FormLabelCol extends Component {
  render() {
    return <Col {...this.props} as="label">{this.props.children}</Col>
  }
}

export default withClassName('col-form-label')(FormLabelCol);
