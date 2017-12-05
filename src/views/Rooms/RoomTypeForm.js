import React from 'react'
import { Field } from 'redux-form'
import Form from './../../components/Form/Form'
import { Col, FormGroup, Label } from 'reactstrap'

const RoomTypeFormView = ({ onSubmit }) => (
  <div className="animated fadeIn">
    <Form onSubmit={onSubmit} title="Room Type Form">
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

export default RoomTypeFormView
