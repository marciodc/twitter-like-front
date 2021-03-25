<template>
  <q-page class="row justify-center">
    <div class="col-sm-12 col-md-4">
      <div class="text-center feed">
        <div class="text-h5 feed-title">Feed</div>
      </div>
      <div style="margin-top: 25px;" v-for="(message, idx) in this.messages" :key="idx" :class="getColor(message.color)" class="card shadow-1">
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
import { Loading, QSpinnerIos } from 'quasar'
import ApiService from '../services/api.service'

export default {
  name: 'PageIndex',
  data () {
    return {
      messages: [],
      color: 1,
      userid: '',
      username: ''
    }
  },
  methods: {
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
        const ret = await ApiService.get('/public')
        if (ret.data) {
          this.messages = ret.data
        }
        Loading.hide()
      } catch (e) {
        Loading.hide()
      }
    }
  },
  async beforeMount () {
    this.loadMessages()
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
    color: navy;
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
