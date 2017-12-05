import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { FORM_DATA_FETCH_SUCCEEDED } from './../constants/constants'
import { reducer as reduxFormReducer } from 'redux-form'
import { buildings, building } from './building'
import { roomTypes, roomOptions } from './room'

const initialValues = (state = {}, action) => {
  switch (action.type) {
    case FORM_DATA_FETCH_SUCCEEDED:
      return action.payload
    case '@@router/LOCATION_CHANGE':
      return {}
    default:
      return state
  }
}

export default combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  buildings,
  building,
  roomTypes,
  roomOptions,
  initialValues
})
