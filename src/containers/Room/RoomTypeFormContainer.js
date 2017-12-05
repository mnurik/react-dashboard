import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionTypes from './../../constants/constants'
import RoomTypeFormView from '../../views/Rooms/RoomTypeForm'

class RoomTypeContainer extends Component {
  componentWillMount() {
    const { roomTypeId } = this.props.match.params
    if (roomTypeId) {
      this.props.dispatch({ type: actionTypes.ROOM_TYPE_FETCH_REQUESTED, roomTypeId })
    }
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: actionTypes.RESET_ROOM_TYPE
    })
  }

  saveRoomType = roomType => {
    this.props.dispatch({ type: actionTypes.SAVE_ROOM_TYPE_REQUESTED, roomType })
  }

  render() {
    return <RoomTypeFormView onSubmit={this.saveRoomType} />
  }
}

export default connect()(RoomTypeContainer)
