// @flow
import React, { Component } from 'react';
import { Card, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from 'react-moment'

type Props = {
  appt: {
    id: number,
    provider_id: number,
    patient_id: number,
    appt_date: string,
    provider: any[]
  }
}

type State = {
  modal: boolean
}

class Appointment extends Component<Props, State> {
  state = { modal: false }

  toggle = () => {
    this.setState({ modal: !this.state.modal})
  }

  render() {
    let { id, provider, appt_date } = this.props.appt;
    let date = <Moment format="MM/DD/YYYY HH:mmA">{appt_date}</Moment>
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle>{date}</CardTitle>
            <CardSubtitle>{provider[0].name}</CardSubtitle>
            <Button onClick={this.toggle}>View</Button>
          </CardBody>
        </Card>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}>{date} - {provider[0].name}</ModalHeader>
            <ModalBody>
              <p>Cheif Complaint: ...something</p>
            </ModalBody>
            <ModalFooter>
              <Button color="secondary" onClick={this.toggle}>Close</Button>
            </ModalFooter>
          </Modal>
      </div>
    );
  }
};

export default Appointment;
