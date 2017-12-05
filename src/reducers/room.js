import * as actionTypes from './../constants/constants'

export const roomTypes = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ROOM_TYPES_FETCH_REQUESTED:
      return false
    case actionTypes.ROOM_TYPES_FETCH_SUCCEEDED:
      return action.roomTypes
    case actionTypes.REMOVE_ROOM_TYPE_SUCCEEDED:
      return state.filter(roomType => roomType.id !== action.id)
    default:
      return state
  }
}

export const roomOptions = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ROOM_OPTIONS_FETCH_REQUESTED:
      return false
    case actionTypes.ROOM_OPTIONS_FETCH_SUCCEEDED:
      return action.roomOptions
    case actionTypes.REMOVE_ROOM_OPTION_SUCCEEDED:
      return state.filter(roomOption => roomOption.id !== action.id)
    default:
      return state
  }
}
