import React, { Component } from 'react';
import {
  Container,
  Lead,
  BH3,
  BH4,
  BP,
  BPre,
  BImg
} from 'bootstrap-4-react';

export default class Cbra extends Component {
  render() {
    return (
      <Container>
        <BH3 mt="3">Create Bootstrap React App</BH3>
        <Lead>Create React apps with Bootstrap.</Lead>
        <BP>
          This tool runs <a href="https://github.com/facebook/create-react-app" target="_blank">Create React App</a>{' '}
          with <a href="https://github.com/richardzcode/bootstrap-4-react" target="_blank">Bootstrap 4 React</a>
        </BP>
        <BH4>Installation</BH4>
        <BPre bg="light" text="dark" p="2"><code>
          npm install --global create-react-app<br/>
          npm install --global create-bootstrap-react-app
        </code></BPre>
        <BH4>Create an App</BH4>
        <BPre bg="light" text="dark" p="2"><code>
          create-bootstrap-react-app my-app<br/>
          cd my-app<br/>
          npm start
        </code></BPre>
        <BImg w="100" src="/bootstrap-starter.png" />
        <BH4>Templates</BH4>
        <BP>You may create app with Bootstrap templates.</BP>
        <BPre bg="light" text="dark" p="2"><code>
          create-bootstrap-react-app --template &lt;template_name&gt; my-app
        </code></BPre>
        <BP>For a list of avaiable templates, run</BP>
        <BPre bg="light" text="dark" p="2"><code>
          create-bootstrap-react-app --template
        </code></BPre>
      </Container>
    )
  }
}
