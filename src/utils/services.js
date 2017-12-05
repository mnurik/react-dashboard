import { SERVER_URL, CLIENT_VERSION } from './../config'

export const checkResponseStatus = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json()
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}

export const request = (url, options) =>
  fetch(`${SERVER_URL}/api/v${CLIENT_VERSION.split('.')[0]}/${url}`, options).then(checkResponseStatus)
