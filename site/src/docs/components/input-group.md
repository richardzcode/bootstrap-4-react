## InputGroup

Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs, custom selects, and custom file inputs.

```
renderComp: input_group_1
import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="2">
          <InputGroup.Prepend><InputGroup.Text>@</InputGroup.Text></InputGroup.Prepend>
          <Form.Input type="text" placeholder="Username" />
        </InputGroup>
        <InputGroup mb="2">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <InputGroup.Text>@example.com</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <label>Your vanity URL</label>
        <InputGroup mb="2">
          <InputGroup.Prepend>
            <InputGroup.Text>https://example.com/users/</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="2">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>With textarea</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Textarea />
        </InputGroup>
      </div>
    )
  }
}
```

### Sizing

Add the relative form sizing to the `<InputGroup>` itself and contents within will automatically resize—no need for repeating the form control size classes on each element.

```
renderComp: input_group_2
import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup sm mb="3">
          <InputGroup.PrependText>Small</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.PrependText>Default</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup lg mb="3">
          <InputGroup.PrependText>Large</InputGroup.PrependText>
          <Form.Input type="text" />
        </InputGroup>
      </div>
    )
  }
}
```

### Checkboxes and radios

```
renderComp: input_group_3
import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>
            <Form.Checkbox aria-label="Checkbox for following text input" />
          </InputGroup.PrependText>
          <Form.Input type="text" aria-label="Text input with checkbox" />
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.PrependText>
            <Form.Radio aria-label="Radio for following text input" />
          </InputGroup.PrependText>
          <Form.Input type="text" aria-label="Text input with radio" />
        </InputGroup>
      </div>
    )
  }
}
```

### Multiple inputs

```
renderComp: input_group_4
import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <InputGroup mb="3">
        <InputGroup.PrependText>
          First and last name
        </InputGroup.PrependText>
        <Form.Input type="text" aria-label="First name" />
        <Form.Input type="text" aria-label="Last name" />
      </InputGroup>
    )
  }
}
```

### Multiple addons

```
renderComp: input_group_5
import React, { Component } from 'react';
import { InputGroup, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Input type="text" aria-label="Dollar amount (with dot and two decimal places)" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" aria-label="Dollar amount (with dot and two decimal places)" />
          <InputGroup.Append>
            <InputGroup.Text>$</InputGroup.Text>
            <InputGroup.Text>0.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```

### Button addons

```
renderComp: input_group_6
import React, { Component } from 'react';
import { InputGroup, Button, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" placeholder="Recipient's username" />
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```

### Buttons with dropdowns

```
renderComp: input_group_7
import React, { Component } from 'react';
import { InputGroup, Dropdown, Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Dropdown.Button outline secondary>Dropdown</Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" />
          <InputGroup.Append>
            <Dropdown.Button outline secondary>Dropdown</Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```

### Segmented buttons

```
renderComp: input_group_8
import React, { Component } from 'react';
import { InputGroup, Dropdown, Form, Button, BSpan } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Action</Button>
            <Dropdown.Button outline secondary split>
              <BSpan srOnly>Toggle Dropdown</BSpan>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Prepend>
          <Form.Input type="text" />
        </InputGroup>
        <InputGroup mb="3">
          <Form.Input type="text" />
          <InputGroup.Append>
            <Button outline secondary>Action</Button>
            <Dropdown.Button outline secondary split>
              <BSpan srOnly>Toggle Dropdown</BSpan>
            </Dropdown.Button>
            <Dropdown.Menu>
              <Dropdown.Item href="#">Action</Dropdown.Item>
              <Dropdown.Item href="#">Another action</Dropdown.Item>
              <Dropdown.Item href="#">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```

### Custom forms

Input groups include support for custom selects and custom file inputs. Browser default versions of these are not supported.

#### Select

```
renderComp: input_group_9
import React, { Component } from 'react';
import { InputGroup, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>Options</InputGroup.PrependText>
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
          <InputGroup.AppendText>Options</InputGroup.AppendText>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomSelect>
            <option selected>Choose...</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.CustomSelect>
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```

#### File input

```
renderComp: input_group_10
import React, { Component } from 'react';
import { InputGroup, Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <InputGroup mb="3">
          <InputGroup.PrependText>Upload</InputGroup.PrependText>
          <Form.CustomFile>Choose file</Form.CustomFile>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomFile>Choose file</Form.CustomFile>
          <InputGroup.AppendText>Upload</InputGroup.AppendText>
        </InputGroup>
        <InputGroup mb="3">
          <InputGroup.Prepend>
            <Button outline secondary>Button</Button>
          </InputGroup.Prepend>
          <Form.CustomFile>Choose file</Form.CustomFile>
        </InputGroup>
        <InputGroup mb="3">
          <Form.CustomFile>Choose file</Form.CustomFile>
          <InputGroup.Append>
            <Button outline secondary>Button</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    )
  }
}
```
