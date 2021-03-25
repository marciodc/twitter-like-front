export function loginRequest (state) {
  state.authenticating = true
  state.authenticationError = ''
  state.authenticationErrorCode = 0
}

export function loginSuccess (state, accessToken, userName) {
  state.accessToken = accessToken
  state.userName = userName
  state.logged = true
}

export function loginError (state, { errorCode, errorMessage }) {
  state.authenticationErrorCode = errorCode
  state.authenticationError = errorMessage
}

export function logoutSuccess (state) {
  state.accessToken = null
  state.userId = null
  state.userName = null
  state.logged = false
}
