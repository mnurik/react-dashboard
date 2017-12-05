import { FORM_DATA_FETCH_SUCCEEDED } from './../constants/constants'

import * as building from './building'
import * as room from './room'

const loadFormData = payload => ({
  type: FORM_DATA_FETCH_SUCCEEDED,
  payload
})

export default { loadFormData, building, room }
