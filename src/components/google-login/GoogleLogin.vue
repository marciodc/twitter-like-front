
<template>
  <q-btn outline no-caps align="left" class="full-width" color="indigo-10" @click="handleClick" :id="id">
    <img src="~assets/google.png" style="width: 20px; height: 20px;"/>
    &nbsp;
    &nbsp;
    Entrar com Google
  </q-btn>
</template>

<script>

let componentId = 0
import GoogleAuth from './GoogleAuth'

export default {
  name: 'GoogleLogin',
  props: {
    params: {
      type: Object,
      required: true
    },
    onCurrentUser: {
      type: Function,
      default: () => { }
    },
    onSuccess: {
      type: Function,
      default: () => { }
    },
    onFailure: {
      type: Function,
      default: () => { }
    },
    logoutButton: {
      type: Boolean,
      default: false
    },
    renderParams: {
      type: Object,
      required: false
    }
  },
  beforeCreate () {
    this.id = `google-signin-btn-${componentId++}`
  },
  methods: {
    handleClick () {
      const method = this.logoutButton ? 'signOut' : 'signIn'
      GoogleAuth[method]().then(result => {
        return this.onSuccess(result)
      }).catch(err => {
        return this.onFailure(err)
      })
    }
  },
  mounted () {
    GoogleAuth.load(this.params).then(() => {
      if (this.renderParams && this.logoutButton === false) {
        window.gapi.signin2.render(this.id, this.renderParams)
      }
      if (GoogleAuth.isSignedIn()) {
        this.onCurrentUser(GoogleAuth.currentUser())
      }
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<style>
</style>
