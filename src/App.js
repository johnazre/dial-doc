// @flow
import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import Login from './components/Login'
import AccountInfo from './components/AccountInfo/AccountInfo'
import PastAppointments from './components/PastAppointments'
import Dashboard from './components/Dashboard'
import ScheduleAppt from './components/ScheduleAppt'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component<null, null> {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <TopNav />
          </div>

          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/appointments" component={PastAppointments} />
          <Route exact path="/schedule" component={ScheduleAppt} />
          <Route exact path="/account-info" component={AccountInfo} />
        </div>
      </Router>
    )
  }
}

export default App
