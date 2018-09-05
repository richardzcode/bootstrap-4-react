import React, { Component } from 'react';

import { stack, domStack } from '../../utilities';

class Table extends Component {
  render() {
    return <table {...this.props}>{this.props.children}</table>
  }
}

class Tr extends Component {
  render() {
    return <tr {...this.props}>{this.props.children}</tr>
  }
}

class Td extends Component {
  render() {
    return <td {...this.props}>{this.props.children}</td>
  }
}

class Th extends Component {
  render() {
    return <th {...this.props}>{this.props.children}</th>
  }
}

class Thead extends Component {
  render() {
    return <thead {...this.props}>{this.props.children}</thead>
  }
}

class Tfoot extends Component {
  render() {
    return <tfoot {...this.props}>{this.props.children}</tfoot>
  }
}

class Tbody extends Component {
  render() {
    return <tbody {...this.props}>{this.props.children}</tbody>
  }
}

const BTable = stack(Table, domStack);
const BTr = stack(Tr, domStack);
const BTd = stack(Td, domStack);
const BTh = stack(Th, domStack);
const BThead = stack(Thead, domStack);
const BTfoot = stack(Tfoot, domStack);
const BTbody = stack(Tbody, domStack);

export {
  BTable,
  BTr,
  BTd,
  BTh,
  BThead,
  BTfoot,
  BTbody
}
