// @flow
import { Container, Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap'
import React, { Component } from 'react';

type State = {
  doctor: string,
  date: string,
  time: string
}

class ScheduleAppt extends Component<null, State> {

  state = {
    doctor: '',
    date: '',
    time: ''
  }

  render () {
    return (
      <Container>
        <Row>
          <Col className="text-center" style={{marginTop: 40}}>
            <h2>Speak with a physician now</h2>
            <Button>Click here</Button>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" style={{marginTop: 40}}>
            <h2>Schedule a future appointment</h2>
          </Col>
        </Row>
        <Row>
          <Col className="text-center" lg={{size: 4, offset: 4}}>
            <Form>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleSelect">Select a doctor: </Label>
                <Input
                  type="select"
                  id="exampleSelect"
                  value={this.state.doctor}
                  onChange={(e) => this.setState({doctor: e.target.value})}
                >
                  <option value="1">Dr. John Medina</option>
                  <option value="2">Dr. Kimberly Valdez</option>
                  <option value="3">Dr. David Smith</option>
                  <option value="4">Dr. Jack Davidson</option>
                  <option value="5">Dr. Wendy Williams</option>
                </Input>
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="appt-date">Choose a Date</Label>
                <Input
                  type="date"
                  id="appt-date"
                  value={this.state.date}
                  onChange={(e) => this.setState({date: e.target.value})}
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="appt-time">Choose a Time</Label>
                <Input
                  type="time"
                  id="appt-time"
                  value={this.state.time}
                  onChange={(e) => this.setState({time: e.target.value})}
                />
              </FormGroup>
              <Button style={{marginTop: 15}}>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    )
  }
}
export default ScheduleAppt;
