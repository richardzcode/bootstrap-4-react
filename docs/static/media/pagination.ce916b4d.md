## Pagination

Showing pagination to indicate a series of related content exists across multiple pages.

```
renderComp: pagination_1
import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.ItemLink href="#">Previous</Pagination.ItemLink>
          <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          <Pagination.ItemLink href="#">2</Pagination.ItemLink>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">Next</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
```

### Working with icons

Looking to use an icon or symbol in place of text for some pagination links? Be sure to provide proper screen reader support with aria attributes and the `sr-only` utility.

```
renderComp: pagination_2
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
```

### Disabled and active states

Pagination links are customizable for different circumstances. Use `disabled` for links that appear un-clickable and `active` to indicate the current page.

```
renderComp: pagination_3
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
```

You can optionally swap out active or disabled anchors for `<span>`, or omit the anchor in the case of the prev/next arrows, to remove click functionality and prevent keyboard focus while retaining intended styles.

```
renderComp: pagination_4
import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.Item disabled>
            <Pagination.Link as="span">Previous</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">1</Pagination.ItemLink>
          <Pagination.Item active>
            <Pagination.Link>2</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
          <Pagination.ItemLink href="#">Next</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
```

### Sizing

Fancy larger or smaller pagination? Add `lg` or `sm` for additional sizes.

```
renderComp: pagination_5
import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination lg>
          <Pagination.Item disabled>
            <Pagination.Link href="#" tabindex="-1">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">2</Pagination.ItemLink>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
```

```
renderComp: pagination_6
import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination sm>
          <Pagination.Item disabled>
            <Pagination.Link href="#" tabindex="-1">1</Pagination.Link>
          </Pagination.Item>
          <Pagination.ItemLink href="#">2</Pagination.ItemLink>
          <Pagination.ItemLink href="#">3</Pagination.ItemLink>
        </Pagination>
      </nav>
    )
  }
}
```

### Alignment

Change the alignment of pagination components with flexbox utilities.

```
renderComp: pagination_7
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
```

```
renderComp: pagination_8
import React, { Component } from 'react';
import { Pagination } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <nav aria-label="Page navigation example">
        <Pagination justifyContent="end">
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
```
