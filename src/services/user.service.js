import ApiService from './api.service'
import { TokenService } from './storage.service'
import { Loading } from 'quasar'

class AuthenticationError extends Error {
  constructor (errorCode, message) {
    super(message)
    this.name = this.constructor.name
    this.message = message
    this.errorCode = errorCode
  }
}

const UserService = {
  /**
   * Login the user and store the access token to TokenService.
   * @returns accessToken
   * @throws AuthenticationError
  **/
  login: async function (email, password) {
    const data = { email: email, password: password }
    try {
      ApiService.removeHeader()
      const response = await ApiService.post('/user/login', data)
      Loading.hide()
      return response
    } catch (error) {
      Loading.hide()
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  },

  loginSocial: async function (type, token) {
    const data = { token: token }
    try {
      ApiService.removeHeader()
      const url = type === 'google' ? '/user/login/google' : '/user/login/facebook'
      const response = await ApiService.post(url, data)
      Loading.hide()
      return response
    } catch (error) {
      Loading.hide()
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  },

  /**
   * Logout the current user by removing the token from storage.
   * Will also remove `Authorization Bearer <token>` header from future requests.
  **/
  logout () {
    // Remove the token and remove Authorization header from Api Service as well
    TokenService.removeToken()
    TokenService.removeUserId()
    TokenService.removeUserName()
    ApiService.removeHeader()
  },

  /**
   * Create new user and store the access token to TokenService
  **/
  signup: async function (user) {
    try {
      ApiService.removeHeader()
      const response = await ApiService.post('/user/signup', user)
      Loading.hide()
      return response
    } catch (error) {
      Loading.hide()
      throw new AuthenticationError(error.response.status, error.response.data.detail)
    }
  }
}

export default UserService

export { UserService, AuthenticationError }
