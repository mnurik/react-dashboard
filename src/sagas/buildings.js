import { call, put } from 'redux-saga/effects'
import actions from './../actions/actions'
import { BUILDINGS_FAILED } from './../constants/constants'
import * as Api from './../utils/Api'

export function* fetchBuildings(action) {
  try {
    const buildings = yield call(Api.fetchBuildings)
    yield put(actions.building.loadBuildings(buildings))
  } catch (e) {
    yield put({ type: BUILDINGS_FAILED, message: e.message })
  }
}

export function* fetchBuilding(action) {
  try {
    const building = yield call(Api.fetchBuilding, action.buildingId)
    yield put(actions.loadFormData(building))
  } catch (e) {
    yield put({ type: BUILDINGS_FAILED, message: e.message })
  }
}

export function* removeBuilding(action) {
  try {
    yield call(Api.removeBuilding, action.id)
    yield put(actions.building.removeBuilding(action.id))
  } catch (e) {
    yield put({ type: BUILDINGS_FAILED, message: e.message })
  }
}

export function* saveBuilding(action) {
  try {
    const building = yield call(Api.saveBuilding, action.building)
    yield put(action.building.id ? actions.building.editBuilding(building) : actions.building.addBuilding(building))
  } catch (e) {
    yield put({ type: BUILDINGS_FAILED, message: e.message })
  }
}
