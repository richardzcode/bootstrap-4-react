import React, { Component } from 'react';
import { Form } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form.CustomRadio id="customRadio1" name="customRadio">
          Toggle this custom radio
        </Form.CustomRadio>
        <Form.CustomRadio id="customRadio2" name="customRadio">
          Or toggle this other custom radio
        </Form.CustomRadio>
        <Form.CustomRadio id="customRadio3" name="customRadio" mb="3" disabled>
          Toggle this custom radio
        </Form.CustomRadio>
        <Form.CustomRadio id="customRadioInline1" name="customRadioInline" inline>
          Inline custom radio
        </Form.CustomRadio>
        <Form.CustomRadio id="customRadioInline2" name="customRadioInline" inline>
          Other inline custom radio
        </Form.CustomRadio>
      </div>
    )
  }
}
