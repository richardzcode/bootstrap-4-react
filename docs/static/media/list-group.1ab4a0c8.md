## ListGroup

The most basic list group is an unordered list with list items

Add `active` to `<ListGroup.Item>` to indicate the current active selection. Add `disabled` to make it <i>appear</i> disabled.

```
renderComp: list_group_1
import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item active>Cras justo odio</ListGroup.Item>
        <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    )
  }
}
```

### Links and buttons

Use `<ListGroup.Link>`s or `<ListGroup.Button>`s to create actionable list group items with hover, disabled, and active states.

```
renderComp: list_group_2
import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <ListGroup mb="3">
          <ListGroup.Link href="#" active>Cras justo odio</ListGroup.Link>
          <ListGroup.Link href="#" disabled>Dapibus ac facilisis in</ListGroup.Link>
          <ListGroup.Link href="#">Morbi leo risus</ListGroup.Link>
          <ListGroup.Link href="#">Porta ac consectetur ac</ListGroup.Link>
          <ListGroup.Link href="#">Vestibulum at eros</ListGroup.Link>
        </ListGroup>
        <ListGroup>
          <ListGroup.Button active>Cras justo odio</ListGroup.Button>
          <ListGroup.Button disabled>Dapibus ac facilisis in</ListGroup.Button>
          <ListGroup.Button>Morbi leo risus</ListGroup.Button>
          <ListGroup.Button>Porta ac consectetur ac</ListGroup.Button>
          <ListGroup.Button>Vestibulum at eros</ListGroup.Button>
        </ListGroup>
      </div>
    )
  }
}
```

### Flush

Add `flush` to remove some borders and rounded corners to render list group items edge-to-edge in a parent container (e.g., cards).

```
renderComp: list_group_3
import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup flush>
        <ListGroup.Item active>Cras justo odio</ListGroup.Item>
        <ListGroup.Item disabled>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    )
  }
}
```

### Contextual modifiers

Use contextual modifier to style list items with a stateful background and color.

```
renderComp: list_group_4
import React, { Component } from 'react';
import { ListGroup } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item primary>A simple primary list group item</ListGroup.Item>
        <ListGroup.Item secondary>A simple secondary list group item</ListGroup.Item>
        <ListGroup.Item success>A simple success list group item</ListGroup.Item>
        <ListGroup.Item danger>A simple danger list group item</ListGroup.Item>
        <ListGroup.Item warning>A simple warning list group item</ListGroup.Item>
        <ListGroup.Item info>A simple info list group item</ListGroup.Item>
        <ListGroup.Item light>A simple light list group item</ListGroup.Item>
        <ListGroup.Item dark>A simple dark list group item</ListGroup.Item>
      </ListGroup>
    )
  }
}
```

### With badges

Add badges to any list group item to show unread counts, activity, and more.

```
renderComp: list_group_5
import React, { Component } from 'react';
import { ListGroup, Badge } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <ListGroup>
        <ListGroup.Item display="flex" justifyContent="between">
          Cras justo odio
          <Badge primary pill>14</Badge>
        </ListGroup.Item>
        <ListGroup.Item display="flex" justifyContent="between">
          Dapibus ac facilisis in
          <Badge primary pill>2</Badge>
        </ListGroup.Item>
        <ListGroup.Item display="flex" justifyContent="between">
          Morbi leo risus
          <Badge primary pill>1</Badge>
        </ListGroup.Item>
      </ListGroup>
    )
  }
}
```

### Tabs

```
renderComp: list_group_6
import React, { Component } from 'react';
import { ListGroup, Tab, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Row>
        <Col col="4">
          <ListGroup as="div" id="list-tab" role="tablist">
            <ListGroup.Link
              id="list-home-link"
              data-toggle="list"
              href="#list-home"
              role="tab"
              aria-controls="home"
              active
            >
              Home
            </ListGroup.Link>
            <ListGroup.Link
              id="list-profile-link"
              data-toggle="list"
              href="#list-profile"
              role="tab"
              aria-controls="profile"
            >
              Profile
            </ListGroup.Link>
            <ListGroup.Link
              id="list-messages-link"
              data-toggle="list"
              href="#list-messages"
              role="tab"
              aria-controls="messages"
            >
              Messages
            </ListGroup.Link>
            <ListGroup.Link
              id="list-settings-link"
              data-toggle="list"
              href="#list-settings"
              role="tab"
              aria-controls="settings"
            >
              Settings
            </ListGroup.Link>
          </ListGroup>
        </Col>
        <Col col="8">
          <Tab.Content id="nav-tabContent">
            <Tab.Pane fade show active id="list-home" aria-labelledby="list-home-link">
              Velit aute mollit ipsum ad dolor consectetur nulla officia culpa adipisicing exercitation fugiat tempor. Voluptate deserunt sit sunt nisi aliqua fugiat proident ea ut. Mollit voluptate reprehenderit occaecat nisi ad non minim tempor sunt voluptate consectetur exercitation id ut nulla. Ea et fugiat aliquip nostrud sunt incididunt consectetur culpa aliquip eiusmod dolor. Anim ad Lorem aliqua in cupidatat nisi enim eu nostrud do aliquip veniam minim.
            </Tab.Pane>
            <Tab.Pane fade id="list-profile" aria-labelledby="list-profile-link">
              Cupidatat quis ad sint excepteur laborum in esse qui. Et excepteur consectetur ex nisi eu do cillum ad laborum. Mollit et eu officia dolore sunt Lorem culpa qui commodo velit ex amet id ex. Officia anim incididunt laboris deserunt anim aute dolor incididunt veniam aute dolore do exercitation. Dolor nisi culpa ex ad irure in elit eu dolore. Ad laboris ipsum reprehenderit irure non commodo enim culpa commodo veniam incididunt veniam ad.
            </Tab.Pane>
            <Tab.Pane fade id="list-messages" aria-labelledby="list-messages-link">
              Ut ut do pariatur aliquip aliqua aliquip exercitation do nostrud commodo reprehenderit aute ipsum voluptate. Irure Lorem et laboris nostrud amet cupidatat cupidatat anim do ut velit mollit consequat enim tempor. Consectetur est minim nostrud nostrud consectetur irure labore voluptate irure. Ipsum id Lorem sit sint voluptate est pariatur eu ad cupidatat et deserunt culpa sit eiusmod deserunt. Consectetur et fugiat anim do eiusmod aliquip nulla laborum elit adipisicing pariatur cillum.
            </Tab.Pane>
            <Tab.Pane fade id="list-settings" aria-labelledby="list-settings-link">
              Irure enim occaecat labore sit qui aliquip reprehenderit amet velit. Deserunt ullamco ex elit nostrud ut dolore nisi officia magna sit occaecat laboris sunt dolor. Nisi eu minim cillum occaecat aute est cupidatat aliqua labore aute occaecat ea aliquip sunt amet. Aute mollit dolor ut exercitation irure commodo non amet consectetur quis amet culpa. Quis ullamco nisi amet qui aute irure eu. Magna labore dolor quis ex labore id nostrud deserunt dolor eiusmod eu pariatur culpa mollit in irure.
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    )
  }
}
```
