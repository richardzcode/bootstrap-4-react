## Form

```
import React, { Component } from 'react';
import { Form, Button, BLabel } from 'bootstrap-4-react';

export default class App extends Component {
  render() {
    return (
      <div>
        <Form m="5">
          <Form.Group>
            <label htmlFor="exampleInputEmail">Email Address</label>
            <Form.Input lg type="email" id="exampleInputEmail" />
            <Form.Text text="muted"><small>We'll never share your email with anyone else.</small></Form.Text>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleInputPassword">Password</label>
            <Form.Input type="password" id="exampleInputPassword" />
          </Form.Group>
          <Form.Group>
            <Form.Input type="text" readonly="readonly" />
          </Form.Group>
          <Form.Group>
            <label htmlFor="staticEmail">Email</label>
            <Form.PlainText id="staticEmail" value="email@example.com" />
          </Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" id="exampleCheck" />
            <label htmlFor="exampleCheck">Check me out</label>
          </Form.Check>
          <Form.Group>
            <label htmlFor="exampleSelect">Example select</label>
            <Form.Select lg id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleSelectMultiple">Example select multiple</label>
            <Form.Select id="exampleSelectMultiple" multiple>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleTextarea">Example textarea</label>
            <Form.Textarea id="exampleTextarea" valid={true} />
            <Form.Feedback invalid>Invalid feedback</Form.Feedback>
            <Form.Feedback>Valid feedback</Form.Feedback>
          </Form.Group>
          <Form.Group>
            <label htmlFor="exampleRange">Example Range</label>
            <Form.Range id="exampleRange" />
          </Form.Group>
          <Form.Check>
            <Form.CheckInput type="checkbox" noLabel />
          </Form.Check>
          <Form.Check>
            <Form.CheckInput type="radio" noLabel />
          </Form.Check>
          <Button type="submit" primary>Submit</Button>
        </Form>

        <Form inline>
          <Form.Group mb="2">
            <BLabel srOnly>Email</BLabel>
            <Form.PlainText value="email@example.com" />
          </Form.Group>
          <Form.Group>
            <BLabel srOnly>Password</BLabel>
            <Form.Input type="password" placeholder="Password" />
          </Form.Group>
          <Button type="submit" primary>Submit</Button>
        </Form>
      </div>
    )
  }
}
```
