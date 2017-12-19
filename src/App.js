// @flow
import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import Login from './components/Login'
import AccountInfo from './components/AccountInfo/AccountInfo'
import PastAppointmentsMain from './components/PastAppointments/Main'
import Dashboard from './components/Dashboard'
import ScheduleAppt from './components/ScheduleAppt'
import ConferenceRoom from './components/ConferenceRoom'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getAllProviders } from './actions/providers.actions'
import { getAllAppointments } from './actions/appointments.actions'
import { getAllPatients } from './actions/patients.actions'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

type Props = {
  getAllPatients: Function,
  getAllProviders: Function,
  getAllAppointments: Function
}

export class App extends Component<Props, null> {

  componentDidMount(): void {
    let { getAllPatients, getAllProviders, getAllAppointments } = this.props
    getAllPatients()
    getAllProviders()
    getAllAppointments()
  }

  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <TopNav />
          </div>

          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/appointments" component={PastAppointmentsMain} />
          <Route exact path="/schedule" component={ScheduleAppt} />
          <Route exact path="/account-info" component={AccountInfo} />
          <Route exact path="/conference" component={ConferenceRoom} />
        </div>
      </Router>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllPatients: bindActionCreators(getAllPatients, dispatch),
    getAllProviders: bindActionCreators(getAllProviders, dispatch),
    getAllAppointments: bindActionCreators(getAllAppointments, dispatch),
  }
}

export default connect(null, mapDispatchToProps)(App)
