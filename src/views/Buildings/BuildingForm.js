import React from 'react'
import Form from './../../components/Form/Form'
import { Col, FormGroup, Label, Input } from 'reactstrap'

const BuildingForm = ({
  building,
  handleResetClick,
  handleSubmitClick,
  handleChangeInput,
  handleChangeCheckbox,
  countries,
  cities,
  streets,
  handleChangeCountry,
  handleChangeCity,
  handleChangeStreet
}) => (
  <div className="animated fadeIn">
    <Form name="Building Form" handleResetClick={handleResetClick} handleSubmitClick={handleSubmitClick}>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="name">Name</Label>
        </Col>
        <Col xs="12" md="10">
          <Input type="text" id="name" value={building.name} name="name" onChange={handleChangeInput} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="description">Description</Label>
        </Col>
        <Col xs="12" md="10">
          <Input
            type="text"
            id="description"
            value={building.description}
            name="description"
            onChange={handleChangeInput}
          />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="isActive">Status</Label>
        </Col>
        <Col xs="12" md="10">
          <FormGroup check>
            <div className="checkbox">
              <Label check htmlFor="isActive">
                <Input
                  type="checkbox"
                  id="isActive"
                  name="isActive"
                  defaultChecked={building.isActive}
                  onChange={handleChangeCheckbox}
                />
              </Label>
            </div>
          </FormGroup>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="country">Country</Label>
        </Col>
        <Col xs="12" md="10">
          <Input
            type="select"
            id="country"
            // value={building.address.countryCode}
            defaultValue="-1"
            name="countryCode"
            onChange={handleChangeCountry}
          >
            <option value="-1" disabled>
              Secin
            </option>
            {countries.map(country => (
              <option key={country.id} value={country.code}>
                {country.name}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="city">City</Label>
        </Col>
        <Col xs="12" md="10">
          <Input
            type="select"
            id="city"
            defaultValue="-1"
            // value={building.address.cityCode}
            name="cityCode"
            onChange={handleChangeCity}
          >
            <option value="-1" disabled>
              Secin
            </option>
            {cities.map(city => (
              <option key={city.id} value={city.code}>
                {city.name}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="street">Street</Label>
        </Col>
        <Col xs="12" md="10">
          <Input
            type="select"
            id="street"
            defaultValue="-1"
            // value={building.address.streetCode}
            name="streetCode"
            onChange={handleChangeStreet}
          >
            <option value="-1" disabled>
              Secin
            </option>
            {streets.map(street => (
              <option key={street.id} value={street.code}>
                {street.name}
              </option>
            ))}
          </Input>
        </Col>
      </FormGroup>
    </Form>
  </div>
)

export default BuildingForm
