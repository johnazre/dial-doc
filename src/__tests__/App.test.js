import React from 'react'
import ReactDOM from 'react-dom'
import {App} from '../App'
import { shallow } from 'enzyme'
import TopNav from '../components/TopNav'

let props = {
  getAllPatients: jest.fn(),
  getAllProviders: jest.fn(),
  getAllAppointments: jest.fn()
}
describe('App.js', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const app = shallow(<App {...props}/>, div);
    const mainDiv = app.find('div');
    expect(mainDiv).toHaveLength(2);
  })

  it('should render one <TopNav /> components', () => {
    const wrapper = shallow(<App {...props}/>)
    expect(wrapper.find(TopNav)).toHaveLength(1)
  })

  it('should call getAllPatients method', () => {
    const wrapper = shallow(<App {...props}/>)
    expect(props.getAllPatients).toHaveBeenCalled()
  })

  it('should call getAllProviders method', () => {
    const wrapper = shallow(<App {...props}/>)
    expect(props.getAllProviders).toHaveBeenCalled()
  })

  it('should call getAllAppointments method', () => {
    const wrapper = shallow(<App {...props}/>)
    expect(props.getAllAppointments).toHaveBeenCalled()
  })
})
