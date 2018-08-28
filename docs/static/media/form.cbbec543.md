## Form

Bootstrap form controls expand on [Rebooted form styles](https://getbootstrap.com/docs/4.1/content/reboot/#forms). Use these components to opt into their customized displays for a more consistent rendering across browsers and devices.

```
renderComp: form_1
import React, { Component } from 'react';
import { Form, Button } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <Form.Input type="email" id="exampleInputEmail1" placeholder="Enter email" />
          <Form.Text text="muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleInputPassword1">Password</label>
          <Form.Input type="password" id="exampleInputPassword1" placeholder="Password" />
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck1" />
            <Form.CheckLabel htmlFor="exampleCheck1">Check me out</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Button primary type="submit">Submit</Button>
      </Form>
    )
  }
}
```

### Select, textarea, and file

```
renderComp: form_2
import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="exampleControlsInput1">Email address</label>
          <Form.Input type="email" id="exampleControlsInput1" placeholder="Enter email" />
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsSelect1">Example select</label>
          <Form.Select id="exampleControlsSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsSelect2">Example select</label>
          <Form.Select id="exampleControlsSelect2" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsTextarea1">Example textarea</label>
          <Form.Textarea id="exampleControlsTextarea1" rows="3"></Form.Textarea>
        </Form.Group>
        <Form.Group>
          <label htmlFor="exampleControlsFile1">Example file</label>
          <Form.File id="exampleControlsFile1"/>
        </Form.Group>
      </Form>
    )
  }
}
```

### Sizing

Set heights using `lg` and `sm`

```
renderComp: form_3
import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Form.Input lg placeholder="Large" />
        <Form.Input placeholder="Default input" />
        <Form.Input sm placeholder="Small" />
        <Form.Select lg>
          <option>Large select</option>
        </Form.Select>
        <Form.Select>
          <option>Default select</option>
        </Form.Select>
        <Form.Select sm>
          <option>Small select</option>
        </Form.Select>
      </React.Fragment>
    )
  }
}
```

### Readonly

```
renderComp: form_4
import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form.Input placeholder="Readonly input here..." readonly />
    )
  }
}
```

### Readonly plain text

If you want to have readonly input components styled as plain text, use `<Form.PlainText>`

```
renderComp: form_5
import React, { Component } from 'react';
import { Form, Row, Col } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Row>
            <Form.LabelCol col="sm-2" htmlFor="staticEmail">Email</Form.LabelCol>
            <Col col="sm-10">
              <Form.PlainText value="email@example.com"></Form.PlainText>
            </Col>
          </Row>
          <Row>
            <Form.LabelCol col="sm-2" htmlFor="inputPassword">Password</Form.LabelCol>
            <Col col="sm-10">
              <Form.Input type="password" placeholder="Password" id="inputPassword" />
            </Col>
          </Row>
        </Form.Group>
      </Form>
    )
  }
}
```

### Range inputs

Horizontally scrollable range inputs.

```
renderComp: form_6
import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <label htmlFor="formControlsRange">Example Range input</label>
          <Form.Range id="formControlRange" />
        </Form.Group>
      </Form>
    )
  }
}
```

### Checkboxes and radios

Default checkboxes and radios are improved upon with the help of `<Form.Check>`.

Disabled checkboxes and radios are supported, you will need to add the `htmlDisabled` attribute to `<Form.CheckInput>`. The disabled attribute will apply a lighter color to help indicate the input state.

Group checkboxes or radios on the same horizontal row by adding `inline` to `<Form.Check>`

```
renderComp: form_7
import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Check>
            <Form.Checkbox id="defaultCheck1" />
            <Form.CheckLabel htmlFor="defaultCheck1">Default checkbox</Form.CheckLabel>
          </Form.Check>
          <Form.Check>
            <Form.Checkbox id="defaultCheck2" htmlDisabled />
            <Form.CheckLabel htmlFor="defaultCheck2">Disabled checkbox</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check>
            <Form.Radio id="exampleRadios1" name="exampleRadios" value="option1" defaultChecked />
            <Form.CheckLabel htmlFor="defaultCheck1">Default radio</Form.CheckLabel>
          </Form.Check>
          <Form.Check>
            <Form.Radio id="exampleRadios2" name="exampleRadios" value="option2" />
            <Form.CheckLabel htmlFor="defaultCheck2">Second default radio</Form.CheckLabel>
          </Form.Check>
          <Form.Check>
            <Form.Radio id="exampleRadios3" name="exampleRadios" value="option3" htmlDisabled />
            <Form.CheckLabel htmlFor="defaultCheck3">Disabled radio</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check inline>
            <Form.Checkbox id="inlineCheckbox1" value="option1" />
            <Form.CheckLabel htmlFor="inlineCheckbox1">1</Form.CheckLabel>
          </Form.Check>
          <Form.Check inline>
            <Form.Checkbox id="inlineCheckbox2" value="option2" />
            <Form.CheckLabel htmlFor="inlineCheckbox2">2</Form.CheckLabel>
          </Form.Check>
          <Form.Check inline>
            <Form.Checkbox id="inlineCheckbox3" value="option3" htmlDisabled />
            <Form.CheckLabel htmlFor="inlineCheckbox3">3 (Disabled)</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
        <Form.Group>
          <Form.Check inline>
            <Form.Radio id="inlineRadio1" name="inlineRadioOptions" value="option1" />
            <Form.CheckLabel htmlFor="inlineRadio1">1</Form.CheckLabel>
          </Form.Check>
          <Form.Check inline>
            <Form.Radio id="inlineRadio2" name="inlineRadioOptions" value="option2" />
            <Form.CheckLabel htmlFor="inlineRadio2">2</Form.CheckLabel>
          </Form.Check>
          <Form.Check inline>
            <Form.Radio id="inlineRadio3" name="inlineRadioOptions" value="option3" htmlDisabled />
            <Form.CheckLabel htmlFor="inlineRadio3">3 (Disabled)</Form.CheckLabel>
          </Form.Check>
        </Form.Group>
      </Form>
    )
  }
}
```
