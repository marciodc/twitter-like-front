import axios from 'axios'
import { Loading, Notify, QSpinnerIos } from 'quasar'
import { TokenService } from './storage.service'

const ApiService = {

  setHeaderForm () {
    axios.defaults.headers.common['Content-Type'] = 'application/json'
    axios.defaults.headers.common.Authorization = 'Bearer ' + TokenService.getToken()
  },

  removeHeader () {
    axios.defaults.headers.common = {}
  },

  async get (resource) {
    try {
      Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-7' })
      const retorno = await axios.get(resource)
      Loading.hide()
      return retorno
    } catch (e) {
      Notify.create({
        color: 'negative',
        message: (e.response && e.response.data && e.response.data.message) ? e.response.data.message : 'Erro buscando dados'
      })
      Loading.hide()
      return false
    }
  },

  async getAll (resources) {
    const promises = resources.map(item => axios.get(item))

    try {
      Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-7' })
      const retorno = await Promise.all(promises)

      Loading.hide()
      return retorno
    } catch (e) {
      Notify.create({
        color: 'negative',
        message: (e.response && e.response.data && e.response.data.message) ? e.response.data.message : 'Erro buscando dados'
      })
      Loading.hide()
      return false
    }
  },

  async post (resource, data) {
    try {
      Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-7' })
      const retorno = await axios.post(resource, data)
      Loading.hide()
      return retorno
    } catch (e) {
      if (e && e.response && e.response.status === 400 && e.response.data && e.response.data.code && (e.response.data.code === '001' || e.response.data.code === '002')) {
        Loading.hide()
        return e.response
      } else {
        Loading.hide()
        if (e && e.response && e.response.status === 500 && e.response.data && e.response.data.message) {
          Notify.create({
            color: 'negative',
            message: e.response.data.message
          })
          throw e
        } else {
          return false
        }
      }
    }
  },

  async put (resource, data) {
    try {
      Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-7' })
      const retorno = await axios.put(resource, data)
      Notify.create({
        color: 'teal',
        message: 'Dados salvos com sucesso'
      })
      Loading.hide()
      return retorno
    } catch (e) {
      Notify.create({
        color: 'negative',
        message: (e.response.data && e.response.data.message) ? e.response.data.message : 'Erro realizando a operação solicitada'
      })
      Loading.hide()
      return false
    }
  },

  async delete (resource) {
    try {
      Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-7' })
      const retorno = await axios.delete(resource)
      Notify.create({
        color: 'teal',
        message: 'Registro excluído com sucesso'
      })
      Loading.hide()
      return retorno
    } catch (e) {
      Notify.create({
        color: 'negative',
        message: (e.response.data && e.response.data.message) ? e.response.data.message : 'Erro excluíndo registro'
      })
      Loading.hide()
      return false
    }
  }

}

export default ApiService
