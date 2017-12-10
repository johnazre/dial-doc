// @flow
import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
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

const Appointment = (props: Props) => {
  let { id, provider, appt_date } = props.appt;
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle><Moment format="MM/DD/YYYY HH:mmA">{appt_date}</Moment></CardTitle>
          <CardSubtitle>{provider[0].name}</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Appointment;
