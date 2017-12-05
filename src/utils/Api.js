import { request } from './../utils/services'

/**
 * BUILDINGS
 */
export const fetchBuildings = () => request('building/all')
export const fetchBuilding = buildingId => request(`building/${buildingId}`)
export const saveBuilding = building =>
  request('building/save', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(building)
  })
export const removeBuilding = id => request('building/remove/' + id)

export const fetchCountries = () =>
  request('address/country/all', { headers: new Headers({ 'Accept-Language': 'en' }) })
export const fetchCities = id =>
  request('address/city/bycountry/' + id, {
    headers: new Headers({ 'Accept-Language': 'en' })
  })
export const fetchStreets = id =>
  request('address/street/bycity/' + id, {
    headers: new Headers({ 'Accept-Language': 'en' })
  })

/**
 * ROOM TYPES
 */
export const fetchRoomTypes = () => request('room/type/all')
export const fetchRoomType = roomTypeId => request(`room/type/${roomTypeId}`)
export const saveRoomType = roomType =>
  request('room/type/save', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(roomType)
  })
export const removeRoomType = id => request('room/type/remove/' + id)

/**
 * ROOM OPTIONS
 */
export const fetchRoomOptions = () => request('room/option/all')
export const fetchRoomOption = roomOptionId => request(`room/option/${roomOptionId}`)
export const saveRoomOption = roomOption =>
  request('room/option/save', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(roomOption)
  })
export const removeRoomOption = id => request('room/option/remove/' + id)
