import React, { Component } from 'react';
import {
  Button,
  Collapse,
  BDiv
} from 'bootstrap-4-react';

import SearchBox from './SearchBox';
import {
  GettingStarted,
  Layout,
  Components,
  Utilities
} from './categories';

export default class Sidebar extends Component {
  render() {
    const { path } = this.props;
    const doc_path = path && path.length > 1
      ? path.slice(1)
      : 'getting-started';

    return (
      <React.Fragment>
        <BDiv display="flex" alignItems="start" className="bd-search">
          <SearchBox />
          <Button
            display="md-none"
            p="0"
            ml="3"
            data-toggle="collapse"
            data-target="#bd-docs-nav"
            aria-controls="bd-docs-nav"
            aria-expanded="false"
            aria-label="Toggle docs navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              width="30"
              height="30"
              focusable="false"
            >
              <title>Menu</title>
              <path
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                d="M4 7h22M4 15h22M4 23h22"
              />
            </svg>
          </Button>
        </BDiv>
        <Collapse mb="3" className="bd-links" id="bd-docs-nav">
          <GettingStarted path={doc_path} />
          <Layout path={doc_path} />
          <Components path={doc_path} />
          <Utilities path={doc_path} />
        </Collapse>
      </React.Fragment>
    )
  }
}
