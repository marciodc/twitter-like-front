import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = process.env.URL.replace(/"/g, '')

Vue.prototype.$axios = axios
