<template>
  <q-page class="row justify-center">
    <div class="col-sm-12 col-md-6">
      <div class="feed">
        <router-link to="/message" tag="div">
          <div class="row items-center back-title">
            <q-icon name="arrow_left" size="sm" color="indigo-10" class="link-cursor"/>
            <div class="link-cursor back-font">Voltar</div>
          </div>
        </router-link>
      </div>
      <div class="row">
        <div class="text-h4 feed-title">Resultados de Busca</div>
      </div>
      <div class="feed-result">
        <div class="back-font">{{searchCount}} resultados encontrados para "{{searchName}}"</div>
      </div>
      <div class="row" style="margin: 15px;">
        <div v-for="(user, idx) in this.users" :key="idx" class="col-3">
          <div class="shadow-2 card bg">
            <div class="content-title link-cursor" style="border-radius: 10px;">
              <router-link :to="'/userMessage/' + user.id" tag="div">
                <div class="card-title">{{user.name}}</div>
              </router-link>
            </div>
            <div class="content-btn" style="border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;">
              <q-btn v-if="!user.following" no-caps style="width: 100%;" label="Seguir" color="indigo-10" ref="btnSubmit" @click="follow(user.id)"></q-btn>
              <q-btn v-if="user.following" no-caps outline style="width: 100%;" label="Seguindo" color="indigo-10" disable></q-btn>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { Loading, QSpinnerIos } from 'quasar'
import { TokenService } from '../services/storage.service'
import ApiService from '../services/api.service'

export default {
  name: 'Search',
  data () {
    return {
      users: {},
      userid: '',
      searchName: '',
      searchCount: 0
    }
  },
  methods: {
    async loadUsers () {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const ret = await ApiService.get(`/user/${this.userid}/search?name=${this.searchName}`)
        if (ret.data) {
          this.users = ret.data
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    },
    async follow (id) {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const ret = await ApiService.post(`/following/${this.userid}/follow/${id}`)
        if (ret.data) {
          this.loadUsers()
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    }
  },
  async beforeMount () {
    this.searchName = this.$route.params.name
    this.userid = TokenService.getUserId()
    this.loadUsers()
  }
}
</script>

<style scoped>
  .bg {
    background-color: #ffffff;
  }
  .feed {
    padding-top: 30px;
    padding-bottom: 5px;
  }
  .feed-title {
    font-weight: bold;
    color: navy;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .feed-result {
    padding-top: 10px;
    padding-bottom: 5px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .back-title {
    margin-left: -7px;
    padding-bottom: 5px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .link-cursor {
    cursor: pointer;
  }
  .card {
    border-radius: 10px;
    margin-bottom: 15px;
    margin-right: 10px;
    padding: 10px;
  }
  .card-title {
    font-weight: bold;
    color: #10159a;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .content {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 1.2em;
  }
  .content-btn {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
  }
  .content-title {
    padding: 10px 10px 10px 10px;
    color: #004d99;
    width: 100%;
    background-color: #ffffff;
  }
</style>
