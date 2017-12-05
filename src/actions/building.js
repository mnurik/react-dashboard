import * as actionTypes from './../constants/constants'

export const loadBuildings = buildings => ({
  type: actionTypes.BUILDINGS_FETCH_SUCCEEDED,
  buildings
})

export const editBuilding = building => ({
  type: actionTypes.EDIT_BUILDING_SUCCEEDED,
  building
})
export const addBuilding = building => ({ type: actionTypes.ADD_BUILDING_SUCCEEDED, building })
export const removeBuilding = id => ({ type: actionTypes.REMOVE_BUILDING_SUCCEEDED, id })
