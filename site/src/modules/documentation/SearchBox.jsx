import React, { Component } from 'react';
import {
  Form,
  Dropdown
} from 'bootstrap-4-react';
import algoliasearch from 'algoliasearch';
import { Logger } from 'fsts';

const logger = new Logger('SearchBox');

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    const client = algoliasearch('HFG5PDWJT0', '4a30489786bed9b1ae2d938461289846');
    this.searchIndex = client.initIndex('docs');

    this.state = {
      show: false,
      matches: []
    }
  }

  handleFocus() {
    const { matches } = this.state;
    if (matches.length > 0) {
      this.setState({ show: true });
    }
  }

  handleBlur() {
    window.setTimeout(() => {
      this.cancelSearch();
    }, 200);
  }

  handleKeyDown(event) {
    const key = event.key;
    if (key === 'Escape') {
      this.cancelSearch();
    }
  }

  handleSearch(event) {
    const q = event.target.value;
    logger.debug('search by ' + q);

    if (!q) {
      this.setState({
        show: false,
        matches: []
      });
      return;
    }

    const that = this;
    this.searchIndex.search({
      query: q
    }, function(err, content) {
      if (err) {
        logger.debug('search error', err);
      } else {
        that.setState({
          show: content.hits.length > 0,
          matches: content.hits
        });
      }
    });
  }

  cancelSearch() {
    this.setState({ show: false });
  }

  dropdownItems() {
    const { matches } = this.state;
    return matches.map(match => {
      const { objectID, title, content } = match;
      const brief = content.length > 100
        ? content.slice(0, 100) + '...'
        : content;
      return (
        <Dropdown.Item href={'/#documentation/' + objectID} key={objectID}>
          <div style={{ fontSize: '1.2em'}}>{title}</div>
          <div style={{ whiteSpace: 'pre-wrap', paddingLeft: '1rem' }}>{brief}</div>
        </Dropdown.Item>
      )
    });
  }

  render() {
    const { show } = this.state;

    return (
      <Dropdown flexGrow="1">
        <Form.Input
          id="search-input"
          placeholder="Search..."
          aria-label="Search for..."
          autoComplete="off"
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          onKeyDown={this.handleKeyDown}
          onChange={this.handleSearch}
        />
        <Dropdown.Menu className={show? 'show' : ''} style={{ width: '100%', fontSize: '0.8em' }}>
          {this.dropdownItems()}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}
