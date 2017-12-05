import _ from 'lodash'
import {
  ADD_BUILDING_SUCCEEDED,
  EDIT_BUILDING_SUCCEEDED,
  REMOVE_BUILDING_SUCCEEDED,
  BUILDINGS_FETCH_SUCCEEDED,
  RESET_BUILDING,
  BUILDING_FETCH_SUCCEEDED,
  EDIT_BUILDING,
  BUILDINGS_FETCH_REQUESTED
} from './../constants/constants'

export const buildings = (state = [], action) => {
  switch (action.type) {
    case BUILDINGS_FETCH_REQUESTED:
      return false
    case BUILDINGS_FETCH_SUCCEEDED:
      return action.buildings
    case ADD_BUILDING_SUCCEEDED:
      return state.concat(action.building)
    case EDIT_BUILDING_SUCCEEDED:
      return state.map(building => {
        if (building.id === action.building.id) {
          return action.building
        }
        return building
      })
    case REMOVE_BUILDING_SUCCEEDED:
      return state.filter(building => building.id !== action.id)
    default:
      return state
  }
}

const initialBuilding = {
  id: null,
  name: '',
  description: '',
  isActive: true,
  address: ''
}

let loadedData

export const building = (state = initialBuilding, action) => {
  switch (action.type) {
    case BUILDING_FETCH_SUCCEEDED:
      loadedData = _.cloneDeep(action.building)
      return action.building
    case EDIT_BUILDING:
      return { ...state, ...action.payload }
    case RESET_BUILDING:
      return action.loaded ? loadedData : initialBuilding
    default:
      return state
  }
}
