import { UserService, AuthenticationError } from '../../services/user.service'
import { TokenService } from '../../services/storage.service'
import ApiService from '../../services/api.service'

export async function login ({ commit }, { email, password, redirect }) {
  commit('loginRequest')

  try {
    const response = await UserService.login(email, password)

    if (response.data && response.data.token) {
      TokenService.saveToken(response.data.token)
      TokenService.saveUserId(response.data.id)
      TokenService.saveUserName(response.data.name)
      ApiService.setHeaderForm()
      commit('loginSuccess', response.data.token, response.data.name)
      this.$router.push(redirect || '/', () => {})
    }

    return response
  } catch (e) {
    if (e instanceof AuthenticationError) {
      commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
    }

    return null
  }
}

export async function loginSocial ({ commit }, { type, token, redirect }) {
  commit('loginRequest')

  try {
    const response = await UserService.loginSocial(type, token)

    if (response.data && response.data.token) {
      TokenService.saveToken(response.data.token)
      TokenService.saveUserId(response.data.id)
      TokenService.saveUserName(response.data.name)
      ApiService.setHeaderForm()
      commit('loginSuccess', response.data.token, response.data.name)
      this.$router.push(redirect || '/', () => {})
    }

    return response
  } catch (e) {
    if (e instanceof AuthenticationError) {
      commit('loginError', { errorCode: e.errorCode, errorMessage: e.message })
    }

    return null
  }
}

export function logout ({ commit }) {
  UserService.logout()
  commit('logoutSuccess')
  this.$router.push('/', () => {})
}

export async function signup ({ commit }, { user }) {
  try {
    const response = await UserService.signup(user)

    if (response.data && response.data.id) {
      TokenService.saveToken(response.data.token)
      TokenService.saveUserId(response.data.id)
      TokenService.saveUserName(response.data.name)
      ApiService.setHeaderForm()
      commit('loginSuccess', response.data.token, response.data.name)
      this.$router.push('/message', () => {})
    }

    return response
  } catch (e) {
    return null
  }
}
