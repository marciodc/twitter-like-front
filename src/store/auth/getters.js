export function logged (state) {
  return state.accessToken !== undefined && state.accessToken !== null && state.accessToken !== ''
}

export function userId (state) {
  return state.userId
}

export function userName (state) {
  return state.userName
}

export function authenticationErrorCode (state) {
  return state.authenticationErrorCode
}

export function authenticationError (state) {
  return state.authenticationError
}

export function authenticating (state) {
  return state.authenticating
}
