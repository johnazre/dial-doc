import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Container } from 'reactstrap'
import classnames from 'classnames'
import { Form, FormGroup, Label, Input } from 'reactstrap'
import PharmacyList from './PharmacyList'

class AccountInfo extends Component {
  state = {
    activeTab: '1',
    showPharmResults: false
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      })
    }
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => this.toggle('1') }
            >
              Perfil
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => this.toggle('2') }
            >
              Alergias
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => this.toggle('3') }
            >
              Medicamentos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => this.toggle('4') }
            >
              Historia Médica
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => this.toggle('5') }
            >
              Procedimientos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => this.toggle('6') }
            >
              Historia Familiar
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => this.toggle('7') }
            >
              Preguntas
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => this.toggle('8') }
            >
              Farmacias
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '9' })}
              onClick={() => this.toggle('9') }
            >
              Pagos
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '10' })}
              onClick={() => this.toggle('10') }
            >
              Configuración
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} style={{marginTop: 20}}>
          <TabPane tabId="1">
            <Container fluid>
              <Row>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="firstname" className="mr-sm-2">Primer Nombre</Label>
                    <Input type="text" name="first" id="firstname" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="middlename" className="mr-sm-2">Segundo Nombre</Label>
                    <Input type="text" name="middel" id="middlename" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="lastname" className="mr-sm-2">Apellidos</Label>
                    <Input type="text" name="last" id="lastname" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="dob" className="mr-sm-2">Fecha de Nacimiento</Label>
                    <Input type="text" name="dob" id="dob" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="gender" className="mr-sm-2">Sexo</Label>
                    <Input type="text" name="gender" id="gender" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="home" className="mr-sm-2">Teléfono de casa</Label>
                    <Input type="text" name="home" id="home" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="mobile" className="mr-sm-2">Teléfono Celular</Label>
                    <Input type="text" name="mobile" id="mobile" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col sm="12">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="address" className="mr-sm-2">Dirección</Label>
                    <Input type="text" name="address" id="address" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Container fluid>
              <Row>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="city" className="mr-sm-2">Ciudad</Label>
                    <Input type="text" name="city" id="city" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="state" className="mr-sm-2">Estado</Label>
                    <Input type="text" name="state" id="state" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="4">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="zipcode" className="mr-sm-2">Código Postal</Label>
                    <Input type="text" name="zipcode" id="zipcode" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 2, offset: 10}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '2'})}
                  >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="2">
            <Container>
              <Row>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Amoxicilina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Aspirina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Azitromicina (Zithromax)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Claritromicina (Biaxin)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Ciprofloxacino
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Codeína
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Doxiciclina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Eritromicina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Ibuprofeno (Advil, Motrin, Midol)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Yodo
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Lidocaína
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Morfina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Naproxeno (Aleve)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Penicilina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Oxicodona (Percocet)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Sulfonamida
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Tetraciclina
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Otro
                  </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '1'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '3'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="3">
            <Container>
              <Row>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Antibióticos
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el colesterol
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos bloqueadores de ácido
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos inmunosupressores (Ciclosporina)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Antidepresivos
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos inmunosupresores (Tacrolimus)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Anti arrítmicos (Amiodarona)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos inmunosupresores (Prednisona)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Anti arrítmicos (otros)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos inmunosupresores (otros)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Anti psicóticos
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diuréticos (Lasix)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos de Desorden de Déficit de Atención
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diuréticos (Hidroclorotiazida)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para Asma
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diuréticos (otros)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para Alergía
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para dormir
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Anticonceptivos
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el dolor (Hidrocodona)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diluyente de la sangre (Warfarina)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el dolor (Tramadol)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diluyente de la sangre (Xarelto)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el dolor (Ibuprofeno)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diluyente de la sangre (Pradaxa)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el dolor (Naproxeno)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diluyente de la sangre (Aspirina)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para el dolor (otro)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Diluyente de la sangre (otro)
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Suplementos
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Medicamentos para la presión sanguínea
                  </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Otros
                </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '2'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '4'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="4">
            <Container>
              <Row>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Reflujo ácido
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Asma
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Coágulos de Sangre
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Cáncer
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Enfermedad de la arteria coronaria
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
                  Epilepsia
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Ataque al corazón
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Hipertensión
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Enfermedades del riñón
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Úlcera estomacal
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Infarto
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Enfermedad de la tiroides
                </Label>
                </Col>
                <Col sm="6">
                <Label check>
                  <Input type="checkbox" />{' '}
                  Otra
                </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '3'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '5'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="5">
            <Container>
              <Row>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Angioplastía
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Apendectomía
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Cirugía de la espalda
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Cirugía vesícula biliar
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Bypass de corazón
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Reparación de Hernia
                  </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Reemplazo de cadera
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Cirugía de Rodilla
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Marcapaso
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Amigdalectomía
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Vasectomía
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Otra
                    </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '4'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '6'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="6">
            <Container>
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
                    Asma
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Cáncer
                  </Label>
                </Col>
                <Col sm="6">
                  <Label check>
                    <Input type="checkbox" />{' '}
                    Enfermedad de la Arteria Coronaria
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
                    Ataque al corazón
                  </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Colesterol Alto
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Hipertensión
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Enfermedad del riñón
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Migrañas
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
                      Infarto
                    </Label>
                </Col>
                <Col sm="6">
                    <Label check>
                      <Input type="checkbox" />{' '}
                      Otra
                    </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '5'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '7'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="7">
            <Container>
              <Row>
                <Col sm="12">
                  <Label className="mr-sm-2">¿Alguna vez ha abusado de sustancias o drogas?</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
                <Col sm="12">
                  <Label className="mr-sm-2">¿Tiene historial de enfermedades u hospitalizaciones psiquiátricas?</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
                <Col sm="12">
                  <Label className="mr-sm-2">¿Tiene historial de planeación o intento de suicidio?</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}

                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
                <Col sm="12">
                  <Label className="mr-sm-2">¿Hay historial en su familia de intentos de suicidio?</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
              </Row>
              <Row className="text-center">
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '6'})}
                  >Página Anterior</Button>
                </Col>
                <Col sm={{size: 6}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '8'})}
                    >Siguiente Página</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
          <TabPane tabId="8">
            <Row>
              <Col sm="6">
                <Form inline>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="dob" className="mr-sm-2">Búsqueda de Farmacias</Label>
                    <Input type="text" name="dob" id="dob" placeholder="" />
                  </FormGroup>
                  <Button
                    onClick={() => this.setState({showPharmResults: true})}
                  >Buscar</Button>
                </Form>
              </Col>
              <Col sm="6">
                {
                  this.state.showPharmResults
                  ? <PharmacyList />
                  : ''
                }
              </Col>
            </Row>
            <Row className="text-center">
              <Col sm={{size: 6}}  style={{marginTop: 20}}>
                <Button
                  style={{marginLeft: 35}}
                  onClick={() => this.setState({activeTab: '7'})}
                >Página Anterior</Button>
              </Col>
              <Col sm={{size: 6}}  style={{marginTop: 20}}>
                <Button
                  style={{marginLeft: 35}}
                  onClick={() => this.setState({activeTab: '9'})}
                  >Siguiente Página</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="9">
            <Container fluid>
              <Row>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="card" className="mr-sm-2">
                      Número de su tarjeta de crédito
                      {'         '}
                      <img
                        src="https://storage.j0.hn/credit-card-logos.png"
                        alt="cc"
                        style={{width:200}}
                      />
                    </Label>
                    <Input type="text" name="card" id="card" placeholder="" />
                  </FormGroup>

                </Col>
              </Row>
              <Row>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="expm" className="mr-sm-2">Mes de vencimiento</Label>
                    <Input type="text" name="expm" id="expm" placeholder="" />
                  </FormGroup>
                </Col>
                <Col sm="6">
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="expy" className="mr-sm-2">Año de Vencimiento</Label>
                    <Input type="text" name="expy" id="card" placeholder="" />
                  </FormGroup>
                </Col>
              </Row>
            </Container>
            <Row className="text-center">
              <Col sm={{size: 6}}  style={{marginTop: 20}}>
                <Button
                  style={{marginLeft: 35}}
                  onClick={() => this.setState({activeTab: '8'})}
                >Página Anterior</Button>
              </Col>
              <Col sm={{size: 6}}  style={{marginTop: 20}}>
                <Button
                  style={{marginLeft: 35}}
                  onClick={() => this.setState({activeTab: '10'})}
                  >Siguiente Página</Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="10">
          <Container>
              <Row>
                <Col sm="12">
                  <Label className="mr-sm-2">Enviar notificaciones a su correo electrónico</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
                <Col sm="12">
                  <Label className="mr-sm-2">Enviar notificaciones de voz a su celular</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
                <Col sm="12">
                  <Label className="mr-sm-2">Enviar notificaciones por mensaje de texto a su celular</Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}

                    Si
                  </Label>
                  <Label check>
                    <Input type="radio" name="radio1" />{' '}
                    No
                  </Label>
                </Col>
              </Row>
              <Row>
                <Col sm={{size: 2, offset: 8}}  style={{marginTop: 20}}>
                  <Button
                    style={{marginLeft: 35}}
                    onClick={() => this.setState({activeTab: '9'})}
                  >Página Anterior</Button>
                </Col>
              </Row>
            </Container>
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default AccountInfo
