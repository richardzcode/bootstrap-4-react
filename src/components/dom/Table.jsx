import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Table extends Component {
  render() {
    return <table {...this.props}>{this.props.children}</table>
  }
}

export default stack(Table, domStack);
