import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Form, FormGroup, Label, Input } from 'reactstrap';

/*class AccountInfo extends Component {
  render () {
    return (
      <div>Account Info Component</div>
    )
  }
}*/

class AccountInfo extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Personal
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Allergies
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              Medications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              Medical History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              Procedures
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              Family History
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              Questions
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >
              Pharmacy
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '9' })}
              onClick={() => { this.toggle('9'); }}
            >
              Payment
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '10' })}
              onClick={() => { this.toggle('10'); }}
            >
              Settings
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="firstname" className="mr-sm-2">First Name</Label>
                    <Input type="text" name="first" id="firstname" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="middlename" className="mr-sm-2">Middle Name</Label>
                    <Input type="text" name="middel" id="middlename" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="lastname" className="mr-sm-2">Last Name</Label>
                    <Input type="text" name="last" id="lastname" placeholder="" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="dob" className="mr-sm-2">Date of Birth</Label>
                    <Input type="text" name="dob" id="dob" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="gender" className="mr-sm-2">Gender</Label>
                    <Input type="text" name="gender" id="gender" placeholder="" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="home" className="mr-sm-2">Home Phone</Label>
                    <Input type="text" name="home" id="home" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="mobile" className="mr-sm-2">Mobile Phone</Label>
                    <Input type="text" name="mobile" id="mobile" placeholder="" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="address" className="mr-sm-2">Address</Label>
                    <Input type="text" name="address" id="address" placeholder="" />
                  </FormGroup>
                </Form>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="city" className="mr-sm-2">City</Label>
                    <Input type="text" name="city" id="city" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="state" className="mr-sm-2">State</Label>
                    <Input type="text" name="state" id="state" placeholder="" />
                  </FormGroup>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="zipcode" className="mr-sm-2">Zip Code</Label>
                    <Input type="text" name="zipcode" id="zipcode" placeholder="" />
                  </FormGroup>
                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Amoxicillin
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Aspirin
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Azithromycin (Zithromax)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Clarithromycin (Biaxin)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Ciprofloxacin
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Codeine
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Doxycycline
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Erythromycin
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Ibuprofen (Advil, Motrin, Midol)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Iodine
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Lidocaine
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Morphine
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Naproxen (Aleve)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Penicillin
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Oxycodone (Percocet)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Sulfonamide
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Tetracycline
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Other
                </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Antibiotics
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Cholesterol Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Acid blocking Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Immuno-suppressant Medication (Cyclosporin)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Anti-depressants
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Immuno-suppressant Medication (Tacrolimus)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Anti-arrhythmic (Amiodarone)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Immuno-suppressant Medication (Prednisone)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Anti-arrhythmic (Other)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Immuno-suppressant Medication (Other)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Anti-pyschotic
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Diuretics (Lasix)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Attention Deficit Disorder Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Diuretics (Hydrochlorothiazide)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Asthma Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Diuretis (Other)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Allergy Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Sleep Medications
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Birth Control
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Pain Medications (Hydrocodone)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Thinner (Warfarin)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Pain Medications (Tramadol)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Thinner (Xeralto)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Pain Medications (Ibuprofen)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Thinner (Paradaxa)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Pain Medications (Naproxen)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Thinner (Aspirine)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Pain Medications (Other)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Thinner (Other)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Supplements
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Blood Pressure Medications
                </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Other
              </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="4">
            <Row>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Acid reflux
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Asthma
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Blood clots
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Cancer
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Coronary artery disease (cad)
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Diabetes
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Seizures
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Heart attack
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Hypertension
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Kidney disease
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Stomach ulcer
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Stroke
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Thyroid disease
              </Label>
              </Col>
              <Col sm="6">
              <Label check>
                <Input type="checkbox" />{' '}
                Other
              </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="5">
            <Row>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Angioplasty
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Appendectomy
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Back surgery
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Gallbladder surgery
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Heart bypass
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Hernia repair
                </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Hip replacement
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Knee surgery
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Pacemaker
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Tonsillectomy
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Vasectomy
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Other
                  </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="6">
            <Row>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Alzheimers
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Asthma
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Cancer
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Coronary artery disease (cad)
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Diabetes
                </Label>
              </Col>
              <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Heart attack
                </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    High cholesterol
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Hypertension
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Kidney disease
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Migraines
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Osteoporosis
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Stroke
                  </Label>
              </Col>
              <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Other
                  </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="7">
            <Row>
              <Col sm="12">
                <Label className="mr-sm-2">Have you ever abused any substances or drugs</Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Yes
                </Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  No
                </Label>
              </Col>
              <Col sm="12">
                <Label className="mr-sm-2">Do you have a history of psychiatric disorders or hospitalizations</Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Yes
                </Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  No
                </Label>
              </Col>
              <Col sm="12">
                <Label className="mr-sm-2">Do you have a history of suicidal ideations or attempts</Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Yes
                </Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  No
                </Label>
              </Col>
              <Col sm="12">
                <Label className="mr-sm-2">Does your family have a history of suicidal attempts</Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  Yes
                </Label>
                <Label check>
                  <Input type="radio" name="radio1" disabled />{' '}
                  No
                </Label>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="6">

              </Col>
              <Col sm="6">

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="9">
            <Row>
              <Col sm="6">


              </Col>
              <Col sm="6">

              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="10">
            <Row>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
              <Col sm="6">
                <Card body>
                  <CardTitle>Special Title Treatment</CardTitle>
                  <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                  <Button>Go somewhere</Button>
                </Card>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default AccountInfo
