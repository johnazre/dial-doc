// @flow
import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Moment from 'react-moment'

type Props = {
  appt: {
    id: number,
    provider_id: number,
    patient_id: number,
    appt_date: string,
    provider: any[],
    chief_complaint: string,
    illness_description: string
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
    let { provider, appt_date, illness_description, chief_complaint } = this.props.appt;
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
              <p>Chief Complaint: {chief_complaint}</p>
              <hr/>
              <p>Illness Description: {illness_description}</p>
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
