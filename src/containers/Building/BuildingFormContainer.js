import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from './../../constants/constants'
import BuildingForm from '../../views/Buildings/BuildingForm'
import { fetchCountries, fetchCities, fetchStreets } from './../../utils/Api'

class BuildingContainer extends Component {
  state = {
    countries: [],
    cities: [],
    streets: []
  }

  componentDidMount() {
    const { buildingId } = this.props.match.params
    if (buildingId) {
      this.props.dispatch({ type: actionTypes.BUILDING_FETCH_REQUESTED, buildingId })
    }
    fetchCountries().then(countries =>
      this.setState({
        countries: countries,
        cities: [],
        streets: []
      })
    )
  }

  componentWillMount() {
    this.props.dispatch({
      type: actionTypes.RESET_BUILDING
    })
  }

  handleResetClick = () => {
    this.props.dispatch({
      type: actionTypes.RESET_BUILDING,
      loaded: !!this.props.match.params.buildingId
    })
  }

  handleSubmitClick = () => {
    this.props.dispatch({ type: actionTypes.SAVE_BUILDING_REQUESTED, building: this.props.building })
  }

  handleChangeInput = ({ target }) => {
    this.props.dispatch({ type: actionTypes.EDIT_BUILDING, payload: { [target.name]: target.value } })
  }

  handleChangeCheckbox = ({ target }) => {
    this.props.dispatch({ type: actionTypes.EDIT_BUILDING, payload: { [target.name]: target.checked } })
  }

  handleChangeCountry = ({ target }) => {
    this.props.dispatch({
      type: actionTypes.EDIT_BUILDING,
      payload: { address: { [target.name]: target.value } }
    })
    fetchCities(target.value).then(cities => this.setState({ cities, streets: [] }))
  }

  handleChangeCity = ({ target }) => {
    this.props.dispatch({
      type: actionTypes.EDIT_BUILDING,
      payload: { address: { countryCode: this.props.building.address.countryCode, [target.name]: target.value } }
    })
    fetchStreets(target.value).then(streets => this.setState({ streets }))
  }

  handleChangeStreet = ({ target }) => {
    this.props.dispatch({
      type: actionTypes.EDIT_BUILDING,
      payload: { address: { ...this.props.building.address, [target.name]: target.value } }
    })
  }

  render() {
    return (
      <BuildingForm
        {...this.state}
        building={this.props.building}
        handleSubmitClick={this.handleSubmitClick}
        handleResetClick={this.handleResetClick}
        handleChangeInput={this.handleChangeInput}
        handleChangeCheckbox={this.handleChangeCheckbox}
        handleChangeCountry={this.handleChangeCountry}
        handleChangeCity={this.handleChangeCity}
        handleChangeStreet={this.handleChangeStreet}
      />
    )
  }
}

const mapStateToProps = state => ({
  building: state.building
})

export default connect(mapStateToProps)(BuildingContainer)
