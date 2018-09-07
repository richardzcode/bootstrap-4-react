import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination justifyContent="center">
          <Pagination.Item disabled>
            <Pagination.Link as="span">Previous</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          <Pagination.ItemLink href="#">2</Pagination.ItemLink>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">Next</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
