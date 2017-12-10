import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap';

class Dashboard extends Component {
  render () {
    let colStyles = {
      height: 300,
      backgroundColor: 'black'
    }
    return (
      <Container>
        <Row style={{marginTop: 200}}>
          <Col >
            <div className="text-center" style={colStyles}>View Past Appointments</div>
          </Col>
          <Col>
            <div className="text-center" style={colStyles}>See your doctor or schedule an appointment</div>
          </Col>
          <Col>
            <div 
            className="text-center" 
            style={colStyles}
            onClick={() => this.props.history.push('/account-info')}
            >View/Change Account Information</div>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard