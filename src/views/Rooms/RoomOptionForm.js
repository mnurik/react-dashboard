import React from 'react'
import Form from './../../components/Form/Form'
import { Field } from 'redux-form'
import { Col, FormGroup, Label } from 'reactstrap'

let RoomOptionForm = props => (
  <div className="animated fadeIn">
    <Form {...props} title="Room Option Form">
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="name">Name</Label>
        </Col>
        <Col xs="12" md="10">
          <Field className="form-control" name="name" component="input" type="text" placeholder="Name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="description">Description</Label>
        </Col>
        <Col xs="12" md="10">
          <Field className="form-control" name="description" component="input" type="text" placeholder="Description" />
        </Col>
      </FormGroup>
    </Form>
  </div>
)

export default RoomOptionForm
