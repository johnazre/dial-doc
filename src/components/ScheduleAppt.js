// @flow
import React, { Component } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

type State = {
  doctor: string,
  date: string,
  time: string,
  modal: boolean,
  complaint: string
}

class ScheduleAppt extends Component<null, State> {

  state = {
    doctor: '',
    date: '',
    time: '',
    modal: false,
    complaint: ''
  }

  toggleModal = () => this.setState({modal: !this.state.modal})

  render () {
    return (
      <Container>
        <Row>
          <Col className="text-center" style={{marginTop: 40}}>
            <h2>Speak with a physician now</h2>
            <Button onClick={this.toggleModal}>Click here</Button>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
        >
          <ModalHeader>Visit Details</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="cheifComplaint">What is your Cheif Complaint?</Label>
                <Input
                  type="text"
                  id="cheifComplaint"
                  placeholder="back hurts, nausea, etc."
                  value={this.state.complaint}
                  onChange={(e) => this.setState({complaint: e.target.value})}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
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
