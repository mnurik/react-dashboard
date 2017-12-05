import * as actionTypes from './../constants/constants'

export const loadRoomTypes = roomTypes => ({ type: actionTypes.ROOM_TYPES_FETCH_SUCCEEDED, roomTypes })
export const editRoomType = roomType => ({ type: actionTypes.EDIT_ROOM_TYPE_SUCCEEDED, roomType })
export const removeRoomType = id => ({ type: actionTypes.REMOVE_ROOM_TYPE_SUCCEEDED, id })

export const loadRoomOptions = roomOptions => ({ type: actionTypes.ROOM_OPTIONS_FETCH_SUCCEEDED, roomOptions })
export const editRoomOption = roomOption => ({ type: actionTypes.EDIT_ROOM_OPTION_SUCCEEDED, roomOption })
export const removeRoomOption = id => ({ type: actionTypes.REMOVE_ROOM_OPTION_SUCCEEDED, id })
