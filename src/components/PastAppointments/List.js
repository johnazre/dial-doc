// @flow
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { sortAppts } from '../../actions/appointments.actions'
import Appointment from './Appointment'
import { Row, Col, FormGroup, Input, Label } from 'reactstrap'

type Appt = {
  id: number,
  provider_id: number,
  patient_id: number,
  appt_date: string
}

type Props = {
  appts: Appt[],
  sortAppts: Function
}


class PastAppointmentsList extends Component<Props, null> {

  render () {
    let apptList = this.props.appts.map(appt => {
      return (
        <Col key={appt.id} md="4" style={{marginTop: 20}}>
          <Appointment appt={appt}/>
        </Col>
      )
    });
    return (
      <div>
        <h2>Past Appointments</h2>
        <Row>
          <Col>
            <FormGroup>
              <Label for="sortAppts">Sort By:</Label>
              <Input
                type="select"
                id="sortAppts"
                onChange={(e) => this.props.sortAppts(e.target.value)}
              >
                <option value="desc">Newest to Oldest</option>
                <option value="asc">Oldest to Newest</option>
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          {apptList}
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    appts: state.appointments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    sortAppts: bindActionCreators(sortAppts, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PastAppointmentsList)
