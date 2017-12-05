import { call, put } from 'redux-saga/effects'
import actions from './../actions/actions'
import { ROOM_TYPES_FAILED, ROOM_OPTIONS_FAILED } from './../constants/constants'
import * as Api from './../utils/Api'

/**
 * ROOM TYPES
 * @param {*} action
 */
export function* fetchRoomTypes(action) {
  try {
    const roomTypes = yield call(Api.fetchRoomTypes)
    yield put(actions.room.loadRoomTypes(roomTypes))
  } catch (e) {
    yield put({ type: ROOM_TYPES_FAILED, message: e.message })
  }
}

export function* fetchRoomType(action) {
  try {
    const data = yield call(Api.fetchRoomType, action.roomTypeId)
    yield put(actions.loadFormData(data))
  } catch (e) {
    yield put({ type: ROOM_TYPES_FAILED, message: e.message })
  }
}

export function* removeRoomType(action) {
  try {
    yield call(Api.removeRoomType, action.id)
    yield put(actions.room.removeRoomType(action.id))
  } catch (e) {
    yield put({ type: ROOM_TYPES_FAILED, message: e.message })
  }
}

export function* saveRoomType(action) {
  try {
    const roomType = yield call(Api.saveRoomType, action.roomType)
    yield put(actions.room.editRoomType(roomType))
  } catch (e) {
    yield put({ type: ROOM_TYPES_FAILED, message: e.message })
  }
}

/**
 * ROOM OPTIONS
 * @param {*} action
 */
export function* fetchRoomOptions(action) {
  try {
    const roomOptions = yield call(Api.fetchRoomOptions)
    yield put(actions.room.loadRoomOptions(roomOptions))
  } catch (e) {
    yield put({ type: ROOM_OPTIONS_FAILED, message: e.message })
  }
}

export function* fetchRoomOption(action) {
  try {
    const roomOption = yield call(Api.fetchRoomOption, action.roomOptionId)
    yield put(actions.loadFormData(roomOption))
  } catch (e) {
    yield put({ type: ROOM_OPTIONS_FAILED, message: e.message })
  }
}

export function* removeRoomOption(action) {
  try {
    yield call(Api.removeRoomOption, action.id)
    yield put(actions.room.removeRoomOption(action.id))
  } catch (e) {
    yield put({ type: ROOM_OPTIONS_FAILED, message: e.message })
  }
}

export function* saveRoomOption(action) {
  try {
    const roomOption = yield call(Api.saveRoomOption, action.roomOption)
    yield put(actions.room.editRoomOption(roomOption))
  } catch (e) {
    yield put({ type: ROOM_OPTIONS_FAILED, message: e.message })
  }
}
