import React, { Component } from 'react';
import { Pagination, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.ItemLink href="#">
            <BSpan aria-hidden="true">&laquo;</BSpan>
            <BSpan srOnly>Previous</BSpan>
          </Pagination.ItemLink>
          <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          <Pagination.ItemLink href="#">2</Pagination.ItemLink>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">
            <BSpan aria-hidden="true">&raquo;</BSpan>
            <BSpan srOnly>Next</BSpan>
          </Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
