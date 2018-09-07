import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.Item disabled>
            <Pagination.Link href="#">Previous</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          <Pagination.Item active>
            <Pagination.Link href="#">2</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">Next</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
