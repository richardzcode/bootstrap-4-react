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
