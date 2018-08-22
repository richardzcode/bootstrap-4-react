import React, { Component } from 'react';
import {
  BDiv
} from 'bootstrap-4-react';

import { MD } from '../../utils';
import docs from '../../docs';

const md = new MD();

export default class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }
  }

  componentDidMount() {
    this.loadDoc();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.path !== this.props.path) {
      this.loadDoc();
    }
  }

  loadDoc() {
    const { path } = this.props;
    const doc_path = path && path.length > 1
      ? path.slice(1)
      : 'getting-started/introduction';

    fetch(docs.findDoc(doc_path))
      .then(response => response.text())
      .then(text => this.setState({ content: md.render(text) }));
  }

  render() {
    const { content } = this.state;

    return (
      <React.Fragment>
        <BDiv dangerouslySetInnerHTML={{__html: content}}></BDiv>
      </React.Fragment>
    )
  }
}
