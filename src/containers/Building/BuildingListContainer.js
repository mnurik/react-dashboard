import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from './../../constants/constants'
import BuildingsList from '../../views/Buildings/BuildingsList'

class Building extends Component {
  componentDidMount() {
    this.props.dispatch({ type: actionTypes.BUILDINGS_FETCH_REQUESTED })
  }

  deleteBuilding = id => {
    this.props.dispatch({ type: actionTypes.REMOVE_BUILDING_REQUESTED, id })
  }

  handleAddClick = () => {
    this.props.history.push('/building/form')
  }

  render() {
    return (
      <BuildingsList
        handleAddClick={this.handleAddClick}
        buildings={this.props.buildings}
        onDeleteBuilding={this.deleteBuilding}
      />
    )
  }
}

const mapStateToProps = state => ({
  buildings: state.buildings
})

export default connect(mapStateToProps)(Building)
