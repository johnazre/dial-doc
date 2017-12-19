import React from 'react'
import ReactDOM from 'react-dom'
import {Login} from '../components/Login'
import { shallow } from 'enzyme'
import { Container, Row } from 'reactstrap'

let props = {}

describe('Login.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    const app = shallow(<Login {...props} />, div)
    const mainDiv = app.find('div')
    expect(mainDiv).toHaveLength(2)
  })

  it('should render one <TopNav /> components', () => {
    const wrapper = shallow(<Login {...props}/>)
    expect(wrapper.find(Row)).toHaveLength(1)
  })

  // it('should call getAllPatients method', () => {
  //   const wrapper = shallow(<Login {...props}/>)
  //   expect(props.getAllPatients).toHaveBeenCalled()
  // })
  //
  // it('should call getAllProviders method', () => {
  //   const wrapper = shallow(<Login {...props}/>)
  //   expect(props.getAllProviders).toHaveBeenCalled()
  // })
  //
  // it('should call getAllLoginointments method', () => {
  //   const wrapper = shallow(<Login {...props}/>)
  //   expect(props.getAllLoginointments).toHaveBeenCalled()
  // })
})
