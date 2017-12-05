import { takeEvery } from 'redux-saga/effects'
import * as actionTypes from './../constants/constants'
import * as buildingSagas from './buildings'
import * as roomSagas from './rooms'

export default function* appSagas() {
  yield takeEvery(actionTypes.BUILDINGS_FETCH_REQUESTED, buildingSagas.fetchBuildings)
  yield takeEvery(actionTypes.BUILDING_FETCH_REQUESTED, buildingSagas.fetchBuilding)
  yield takeEvery(actionTypes.SAVE_BUILDING_REQUESTED, buildingSagas.saveBuilding)
  yield takeEvery(actionTypes.REMOVE_BUILDING_REQUESTED, buildingSagas.removeBuilding)

  yield takeEvery(actionTypes.ROOM_TYPES_FETCH_REQUESTED, roomSagas.fetchRoomTypes)
  yield takeEvery(actionTypes.ROOM_TYPE_FETCH_REQUESTED, roomSagas.fetchRoomType)
  yield takeEvery(actionTypes.SAVE_ROOM_TYPE_REQUESTED, roomSagas.saveRoomType)
  yield takeEvery(actionTypes.REMOVE_ROOM_TYPE_REQUESTED, roomSagas.removeRoomType)

  yield takeEvery(actionTypes.ROOM_OPTIONS_FETCH_REQUESTED, roomSagas.fetchRoomOptions)
  yield takeEvery(actionTypes.ROOM_OPTION_FETCH_REQUESTED, roomSagas.fetchRoomOption)
  yield takeEvery(actionTypes.SAVE_ROOM_OPTION_REQUESTED, roomSagas.saveRoomOption)
  yield takeEvery(actionTypes.REMOVE_ROOM_OPTION_REQUESTED, roomSagas.removeRoomOption)
}
