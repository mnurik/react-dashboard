import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from './../../constants/constants'
import Rooms from '../../views/Rooms/Rooms'

class Room extends Component {
  componentDidMount() {
    this.props.dispatch({ type: actionTypes.ROOM_TYPES_FETCH_REQUESTED })
    this.props.dispatch({ type: actionTypes.ROOM_OPTIONS_FETCH_REQUESTED })
  }

  handleDeleteRemoveType = id => {
    this.props.dispatch({ type: actionTypes.REMOVE_ROOM_TYPE_REQUESTED, id })
  }

  handleDeleteRoomOption = id => {
    this.props.dispatch({ type: actionTypes.REMOVE_ROOM_OPTION_REQUESTED, id })
  }

  handleAddClick = url => {
    this.props.history.push(url)
  }

  render() {
    return (
      <Rooms
        handleAddClick={this.handleAddClick}
        roomTypes={this.props.roomTypes}
        roomOptions={this.props.roomOptions}
        onDeleteRemoveType={this.handleDeleteRemoveType}
        onDeleteRoomOption={this.handleDeleteRoomOption}
      />
    )
  }
}

const mapStateToProps = state => ({
  roomTypes: state.roomTypes,
  roomOptions: state.roomOptions
})

export default connect(mapStateToProps)(Room)
