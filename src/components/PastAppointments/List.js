// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Appointment from './Appointment'
import { Row, Col } from 'reactstrap'

type Appt = {
  id: number,
  provider_id: number,
  patient_id: number,
  appt_date: string
}

type Props = {
  appts: Appt[]
}

class PastAppointmentsList extends Component<Props, null> {
  render () {
    console.log('appts', this.props);
    let apptList = this.props.appts.map(appt => {
      return (
        <Col key={appt.id} md="4" style={{marginTop: 20}}>
          <Appointment appt={appt}/>
        </Col>
      )
    });
    return (
      <Row>
        {apptList}
      </Row>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    appts: state.appointments
  }
}

export default connect(mapStateToProps, null)(PastAppointmentsList)
