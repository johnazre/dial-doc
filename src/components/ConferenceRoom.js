import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import docImg from '../images/doctor.jpg'
import patImg from '../images/patient1.jpg'
import ChatArea from './ChatArea'

const ConferenceRoom = (props) => {
  let noGutter = {paddingLeft: 2, paddingRight: 2}
  let chatAreaStyle = { borderTop: '2px solid black', minHeight: '30vh', paddingLeft: 0, paddingRight: 0}
  return (
    <div>
      <Row>
        <Col md="9" style={noGutter}>
          <img src={docImg} className="img-fluid" alt="doctor at desk"/>
        </Col>
        <Col md="3" style={noGutter}>
          <img src={patImg} className="img-fluid" alt="patient at desk with laptop"/>
        </Col>
      </Row>
      <Row>
        <Col style={chatAreaStyle}>
          <ChatArea />
        </Col>
      </Row>
    </div>
  )
}

export default ConferenceRoom
