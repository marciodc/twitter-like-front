const TOKEN_KEY = 'accessToken'
const USERNAME = 'userName'
const USERID = 'userId'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
**/
const TokenService = {
  logged () {
    const token = localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
    return token !== undefined && token !== null && token !== ''
  },

  getToken () {
    return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY)
  },

  saveToken (accessToken) {
    sessionStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken () {
    localStorage.removeItem(TOKEN_KEY)
    sessionStorage.removeItem(TOKEN_KEY)
  },

  getUserName () {
    return localStorage.getItem(USERNAME) || sessionStorage.getItem(USERNAME)
  },

  saveUserName (username) {
    sessionStorage.setItem(USERNAME, username)
  },

  removeUserName () {
    localStorage.removeItem(USERNAME)
    sessionStorage.removeItem(USERNAME)
  },

  getUserId () {
    return localStorage.getItem(USERID) || sessionStorage.getItem(USERID)
  },

  saveUserId (id) {
    sessionStorage.setItem(USERID, id)
  },

  removeUserId () {
    localStorage.removeItem(USERID)
    sessionStorage.removeItem(USERID)
  }
}

export { TokenService }
