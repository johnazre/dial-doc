import React from 'react'
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

const PharmacyList = (props) => {
  return (
    <div>
      <h4>Listado de Listado de Farmacias</h4>
      <ListGroup>
        <ListGroupItem active>
          <ListGroupItemHeading>Safeway</ListGroupItemHeading>
          <ListGroupItemText>
            <p>Horas: 0800 - 1700</p>
            <p>Número de Teléfono: 555-555-5555</p>
            <p>Dirección: 123 Main Street</p>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Walmart</ListGroupItemHeading>
          <ListGroupItemText>
            <p>Horas: 0800 - 1700</p>
            <p>Número de Teléfono: 555-555-5555</p>
            <p>Dirección: 123 Main Street</p>
          </ListGroupItemText>
        </ListGroupItem>
        <ListGroupItem>
          <ListGroupItemHeading>Walgreens</ListGroupItemHeading>
          <ListGroupItemText>
            <p>Horas: 0800 - 1700</p>
            <p>Número de Teléfono: 555-555-5555</p>
            <p>Dirección: 123 Main Street</p>
          </ListGroupItemText>
        </ListGroupItem>
      </ListGroup>
    </div>
  )
}
export default PharmacyList
