<template>
  <q-page class="row justify-center">
    <div class="col-sm-12 col-md-4">
      <div class="text-center feed">
        <div class="feed-title">Feed</div>
      </div>
      <div class="col-xs-12 col-md-12 shadow-2 bg" style="border-radius: 10px;">
        <header class="bg" style="border-radius: 10px;">
          <q-bar class="rounded-borders bg" style="border-radius: 10px;">
            <div class="message_username card-title">{{username}}</div>
            <q-space />
            <q-btn-dropdown flat label="" :icon="isPublic? 'o_public' : 'o_lock'" color="blue-grey-13">
              <q-list>
                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="o_public"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label @click="isPublic = true">Público</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section side>
                    <q-icon name="o_lock"/>
                  </q-item-section>
                  <q-item-section>
                    <q-item-label @click="isPublic = false">Privado</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </q-bar>
        </header>

        <div class="q-pt-md">
          <div class="text" style="width: 100%;">
            <textarea rows="4" style="width: 100%;" v-model="text" placeholder="O que você gostaria de compartilhar?"></textarea>
          </div>
        </div>

        <footer style="border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;">
          <div class="row shadow-2 q-pa-md" style="border-bottom-right-radius: 10px; border-bottom-left-radius: 10px;">
            <div class="col-md-8">
              <div class="row justify-start custom-radios">
                <div>
                  <input type="radio" id="color-1" name="color" value="1" checked v-model="color">
                  <label for="color-1">
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                </div>
                <div>
                  <input type="radio" id="color-2" name="color" value="2" v-model="color">
                  <label for="color-2">
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                </div>
                <div>
                  <input type="radio" id="color-3" name="color" value="3" v-model="color">
                  <label for="color-3">
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                </div>
                <div>
                  <input type="radio" id="color-4" name="color" value="4" v-model="color">
                  <label for="color-4">
                    <span>
                      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/check-icn.svg" alt="Checked Icon" />
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="row justify-end">
                <q-btn no-caps class="col-md-12" label="Publicar" color="indigo-10" ref="btnSubmit" @click="savePost()"></q-btn>
              </div>
            </div>
          </div>

        </footer>
      </div>
      <div style="margin-top: 25px;" v-for="(message) in this.newMessages" :key="message.id" :class="getColor(message.color)" class="card shadow-1">
        <div class="column" style="border-top-right-radius: 5px;">
          <div class="content-title">
            <div class="text-subtitle2 card-title">{{username}}</div>
          </div>
          <div class="separator"></div>
          <div class="content" style="border-bottom-right-radius: 5px;">
            {{message.text}}
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-12 shadow-2 newf" style="border-radius: 10px;">
        <div class="text-center">
          <div class="users line1">
            Veja o que as pessoas estão compartilhando!
          </div>
          <div class="users line2">
            <b>Siga mais pessoas</b> para ter um feed persolanizado.
          </div>
        </div>
        <div class="row" style="margin: 15px">
          <div v-for="(user, idx) in this.users" :key="idx" class="col-4">
            <div class="shadow-2" style="border-radius: 10px; margin-bottom: 15px; margin-right: 10px;">
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
      <div style="margin-top: 25px;" v-for="(message, idx) in this.messages" :key="idx" :class="getColor(message.color)" class="card shadow-1">
        <div class="column" style="border-top-right-radius: 5px;">
          <div class="content-title">
            <div class="text-subtitle2 card-title">{{message.name}}</div>
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
  name: 'PageIndex',
  data () {
    return {
      messages: [],
      newMessages: [],
      users: [],
      color: 1,
      text: '',
      isPublic: true,
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
    setPublic (value) {
      this.isPublic = value
    },
    async savePost () {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const msg = {
          userId: this.userid,
          text: this.text,
          public: this.isPublic,
          color: this.color
        }
        const ret = await ApiService.post(`/message/${this.userid}/new`, msg)
        if (ret.data) {
          var nm = {
            id: this.newMessages.length + 1,
            text: this.text,
            color: Number(this.color)
          }

          this.newMessages.unshift(nm)
          this.text = ''
          this.isPublic = true
          this.color = 1
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    },
    async loadMessages () {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const ret = await ApiService.get(`/message/${this.userid}/following`)
        if (ret.data) {
          this.messages = ret.data
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    },
    async loadUsers () {
      try {
        Loading.show({ spinner: QSpinnerIos, spinnerSize: 30, backgroundColor: 'grey-4' })
        const ret = await ApiService.get(`/message/${this.userid}/mostActive`)
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
          this.loadMessages()
          this.loadUsers()
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
        this.loadUsers()
      }
    }
  },
  sockets: {
    connect() {
      console.log('usuario conectado')
    },
    disconnect() {
      console.log('usuario desconectado')
    },
    newMessage(_msg) {
        this.loadMessages()
        this.loadUsers()
    }
  },
  async beforeMount () {
    this.loadMessages()
    this.loadUsers()
    this.$socket.emit('join', this.userid);
  }
}
</script>

<style scoped>
  .bg {
    background-color: #ffffff;
  }
  .feed {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .feed-title {
    font-weight: bold;
    font-size: 30px;
    color: navy;
  }
  .link-cursor {
    cursor: pointer;
  }
  .message_username {
    font-weight: bold;
    color: navy;
    margin-top: 10px;
  }
  .newf {
    margin-top: 30px;
  }
  .users {
    font-size: 16px;
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
  .line1 {
    padding-top: 20px;
  }
  .line2 {
    padding-top: 5px;
    padding-bottom: 5px;
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
  .title {
    padding-top: 10px;
    padding-bottom: 15px;
  }
  .separator {
    height: 1px;
    width: 100%;
    background-color: #f2f2f2;
  }

  .custom-radios div {
    display: inline-block;
    padding-top: 6px;
  }
  .custom-radios input[type="radio"] {
    display: none;
  }
  .custom-radios input[type="radio"] + label {
    color: #333;
    font-family: Arial, sans-serif;
    font-size: 12px;
  }
  .custom-radios input[type="radio"] + label span {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin: -1px 10px 0 0;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    background-repeat: no-repeat;
    background-position: center;
    text-align: center;
    line-height: 30px;
  }
  .custom-radios input[type="radio"] + label span img {
    opacity: 0;
    transition: all 0.3s ease;
  }
  .custom-radios input[type="radio"]#color-1 + label span {
    background-color: #2ecc71;
  }
  .custom-radios input[type="radio"]#color-4 + label span {
    background-color: rgb(2, 66, 109);
  }
  .custom-radios input[type="radio"]#color-3 + label span {
    background-color: #f1c40f;
  }
  .custom-radios input[type="radio"]#color-2 + label span {
    background-color: #e74c3c;
  }
  .custom-radios input[type="radio"]:checked + label span img {
    opacity: 1;
  }
  textarea {
    border-style: none;
    border-color: Transparent;
    overflow: auto;
    outline: none;
    resize: none;
    font-size: 1.5em;
  }
  .text {
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
  }
</style>
