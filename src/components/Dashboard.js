// @flow
import React, { Component } from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import FontAwesome from 'react-fontawesome'

type Props = {
  history: {
    push: Function
  }
}

class Dashboard extends Component<Props, null> {
  render () {
    let colStyles = {
      height: 300,
      backgroundColor: 'beige',
      border: '1px solid #c9c5c2',
      boxShadow: "3px 3px 47px 0px rgba(0,0,0,0.5)"
    }

    let faStyles = {
      display: 'inline-block',
      width: '100%',
      fontSize: 220,
      marginTop: 30
    }

    return (
      <Container>
        <Row style={{marginTop: '15vh'}}>
          <Col
            style={colStyles}
            onClick={() => this.props.history.push('/account-info')}
          >
            <div className="text-center">View Past Appointments</div>
            <FontAwesome className="text-center" name='book' style={faStyles} />
          </Col>
          <Col
            style={colStyles}
            onClick={() => this.props.history.push('/appointments')}
          >
            <div className="text-center">See your doctor or schedule an appointment</div>
            <FontAwesome className="text-center" name='calendar' style={faStyles} />
          </Col>
          <Col
            style={colStyles}
            onClick={() => this.props.history.push('/account-info')}
          >
            <div className="text-center">View/Change Account Information</div>
            <FontAwesome className="text-center" name='user' style={faStyles} />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Dashboard
