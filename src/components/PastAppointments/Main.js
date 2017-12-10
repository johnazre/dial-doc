// @flow
import React, { Component } from 'react'
import List from './List'
import { Container, Row, Col } from 'reactstrap'

class PastAppointmentsMain extends Component<null, null> {
  render () {
    return (
      <Container>
        <Row>
          <Col>
            <List />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default PastAppointmentsMain
