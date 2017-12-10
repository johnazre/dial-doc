// @flow
import React, { Component } from 'react'
import './App.css'
import TopNav from './components/TopNav'
import Login from './components/Login'
import AccountInfo from './components/AccountInfo/AccountInfo'
import Appointments from './components/Appointments'
import Dashboard from './components/Dashboard'

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
          <Route exact path="/account-info" component={AccountInfo} />
          <Route exact path="/appointments" component={Appointments} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App
