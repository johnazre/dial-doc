// @flow
import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

type Props = {
  history: {
    push: Function
  }
}

export class Login extends Component<Props, null> {
  render() {
    return (
      <Container className="main-wrapper">
        <Row style={{marginTop: '23%'}}>
          <Col lg={{ size: 6, offset: 3 }} style={{ border: '1px solid #c9c5c2', padding: 35, boxShadow: "3px 3px 47px 0px rgba(0,0,0,0.5)"}}>
            <Form>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" id="password" />
              </FormGroup>
              <Button onClick={() => this.props.history.push('/dashboard')}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login
