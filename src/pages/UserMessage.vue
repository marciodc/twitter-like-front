<template>
  <q-page class="row justify-center">
    <div class="col-sm-12 col-md-4">
      <div class="feed">

          <div class="row items-center back-title" @click="$router.go(-1)">
            <q-icon name="arrow_left" size="sm" color="indigo-10" class="link-cursor"/>
            <div class="link-cursor back-font">Voltar</div>
          </div>

      </div>
      <div class="row items-center">
        <div class="user-title">{{user.user.name}}</div>
        <q-space/>
          <q-btn v-if="user.user.id && !user.user.following" no-caps style="width: 130px;" label="Seguir" color="indigo-10" ref="btnSubmit" @click="follow(user.user.id)"></q-btn>
          <q-btn v-if="user.user.following" no-caps outline style="width: 130px;" label="Seguindo" color="indigo-10" disable></q-btn>
      </div>
      <div style="margin-top: 25px;" v-for="(message, idx) in this.user.messages" :key="idx" :class="getColor(message.color)" class="card shadow-1">
        <div class="column" style="border-top-right-radius: 5px;">
          <div class="content-title">
            <div class="text-subtitle2 card-title">{{message.user.name}}</div>
          </div>
          <div class="separator"></div>
          <div class="content" style="border-bottom-right-radius: 5px;">
            {{message.text}}
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'
import { Loading, QSpinnerIos } from 'quasar'
import { TokenService } from '../services/storage.service'
import ApiService from '../services/api.service'

export default {
  name: 'UserMEssage',
  data () {
    return {
      user: {},
      userid: '',
      username: ''
    }
  },
  methods: {
    ...mapGetters('auth', ['logged', 'userId', 'userName']),
    getColor (clr) {
      switch (clr) {
        case 1 : return 'green'
        case 2 : return 'red'
        case 3 : return 'yellow'
        case 4 : return 'navy'
      }
    },
    async loadMessages () {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const ret = await ApiService.get(`/message/${this.userid}/publicUserMessage/${this.$route.params.id}`)
        if (ret.data) {
          this.user = ret.data
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
          this.loadMessages()
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    }
  },
  watch: {
    '$store.state.userId': {
      immediate: true,
      handler () {
        this.userid = TokenService.getUserId()
        this.username = TokenService.getUserName()
        this.loadMessages()
      }
    }
  },
  async beforeMount () {
    this.loadMessages()
  }
}
</script>

<style scoped>
  .feed {
    padding-top: 30px;
  }
  .user-title {
    font-weight: bold;
    font-size: 1.5em;
    color: navy;
  }
  .back-font {
    color: navy;
  }
  .back-title {
    margin-left: -7px;
    padding-bottom: 5px;
  }
  .link-cursor {
    cursor: pointer;
  }
  .green{
    background-color: #46c9a7;
  }
  .red{
    background-color: #ff7074;
  }
  .yellow{
    background-color: #ffbe00;
  }
  .navy{
    background-color: #10159a;
  }
  .card {
    padding-left: 5px;
    border-radius: 5px;
  }
  .card-title {
    font-weight: bold;
    color: navy;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .content {
    width: 100%;
    padding: 10px;
    background-color: #ffffff;
    font-family: Verdana, Arial, Helvetica, sans-serif;
    font-size: 1.2em;
  }
  .content-title {
    padding: 10px 10px 10px 10px;
    color: #004d99;
    width: 100%;
    background-color: #ffffff;
  }
  .title {
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .separator {
    height: 1px;
    width: 100%;
    background-color: #f2f2f2;
  }
</style>
