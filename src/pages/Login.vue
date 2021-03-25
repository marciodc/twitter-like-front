<template class="body-login">
  <div
    class="window-height row justify-center q-mx-md items-center" style="background-color: #f6f3fd;"
  >
    <div class="col-xs-12 col-sm-6 col-md-3 shadow-2 rounded-borders" :style="`width: ${($q.screen.lt.sm || $q.screen.lt.md) ? '' : '360px'};`" style="background-color: #fff;">
      <div class="row justify-center q-pa-md" style="padding-top: 40px;">
        <img
          src="~assets/logo.png"
          style="width: 90px; height: 90px;"
        />
      </div>
      <div class="q-pa-md">
        <!-- <q-btn outline no-caps align="left" class="full-width" color="indigo-10" @click="loginFacebook()">
          <img
            src="~assets/facebook.png"
            style="width: 20px; height: 20px;"
          />
          &nbsp;
          &nbsp;
          Entrar com Facebook
        </q-btn> -->
        <SimpleFBButtonLogin appId="1112801065887276" :onSuccess="loginFacebook"/>
        <p/>
        <GoogleLogin :params="params" :onSuccess="gSuccess" :onFailure="onFailure"/>
        <p/>
        <div class="row justify-center items-center">
          <div class="col-4"><q-separator>ou</q-separator></div>
          <div class="col-2 text-center">ou</div>
          <div class="col-4"><q-separator>ou</q-separator></div>
        </div>
        <p/>
        <q-input
          class="col-12"
          label="E-mail"
          float-label="E-mail"
          placeholder="email@exemplo.com.br"
          ref="email"
          stack-label
          outlined
          required
          dense
          v-model="email"
        />
        <p/>
        <q-input
          class="col-12"
          label="Senha"
          float-label="Senha"
          placeholder="******"
          ref="password"
          type="password"
          stack-label
          required
          outlined
          dense
          v-model="password"
          v-on:keyup.enter="submit()"
        />
        <p/>
        <div class="column">
          <div class="row justify-end">
            <q-btn no-caps class="col-sm-12 col-md-4" label="Entrar" color="indigo-10" ref="btnSubmit" @click="submit()"></q-btn>
          </div>
          <p/>
          <div class="row justify-center">
            <div>Não possui conta? Faça o seu <b><u><router-link to="/signup">cadastro</router-link></u></b></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GoogleLogin from '../components/google-login'
import SimpleFBButtonLogin from '../components/facebook-login'
import { mapActions } from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      response: null,
      params: {
        client_id: process.env.GOOGLE_ID.replace(/"/g, '')
      }
    }
  },
  components: {
    GoogleLogin,
    SimpleFBButtonLogin
  },
  methods: {
    ...mapActions('auth', ['login', 'loginSocial']),
    submit () {
      if (!this.response) {
        this.login({
          email: this.email,
          password: this.password,
          redirect: this.$route.query.redirect
        })
          .then(res => {
            this.response = res
          })
      } else {
        this.password = ''
      }
    },
    gSuccess (g) {
      if (g) {
        this.loginSocial({
          type: 'google',
          token: g.tc.id_token
        })
          .then(res => {
            this.response = res
          })
      } else {
        this.password = ''
      }
    },
    onFailure (e) {
      console.log(e)
    },
    async loginFacebook (f) {
      if (f) {
        this.loginSocial({
          type: 'facebook',
          token: f.authResponse.accessToken
        })
          .then(res => {
            this.response = res
          })
      } else {
        this.password = ''
      }
    }
  }
}
</script>

<style scoped>
  a {
    text-decoration: none;
    color: #000000;
  }
</style>
