import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actionTypes from './../../constants/constants'
import RoomOptionForm from '../../views/Rooms/RoomOptionForm'

class RoomOptionContainer extends Component {
  componentDidMount() {
    const { roomOptionId } = this.props.match.params
    if (roomOptionId) {
      this.props.dispatch({ type: actionTypes.ROOM_OPTION_FETCH_REQUESTED, roomOptionId })
    }
  }

  componentWillMount() {
    this.props.dispatch({
      type: actionTypes.RESET_ROOM_OPTION
    })
  }

  handleSubmitClick = () => {
    this.props.dispatch({ type: actionTypes.SAVE_ROOM_OPTION_REQUESTED, roomOption: this.props.roomOption })
  }

  render() {
    return <RoomOptionForm handleSubmitClick={this.handleSubmitClick} />
  }
}

export default connect()(RoomOptionContainer)
