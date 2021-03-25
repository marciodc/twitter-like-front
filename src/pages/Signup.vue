<template class="body-login">
  <div
    class="window-height row justify-center q-mx-md items-center" style="background-color: #f6f3fd;"
  >
    <div class="col-xs-12 col-sm-6 col-md-3 shadow-2 rounded-borders" :style="`width: ${($q.screen.lt.sm || $q.screen.lt.md) ? '' : '320px'};`" style="background-color: #fff;">
      <div class="q-pa-md">
        <div class="text-center title">
          <div class="text-h5 title-text">Cadastro</div>
        </div>
        <q-input
          class="col-12"
          label="Nome"
          float-label="Nome"
          placeholder="Seu nome"
          ref="nome"
          stack-label
          outlined
          required
          dense
          v-model="$v.user.name.$model"
          :error-message="getMensagemErro($v.user.name)"
          :error='$v.user.name.$error'
        />
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
          v-model="$v.user.email.$model"
          :error-message="getMensagemErro($v.user.email)"
          :error='$v.user.email.$error'
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
          v-model="$v.user.password.$model"
          :error-message="getMensagemErro($v.user.password)"
          :error='$v.user.password.$error'
        />
        <p/>
        <q-input
          class="col-12"
          label="Confirmar Senha"
          float-label="Confirmar Senha"
          placeholder="******"
          ref="confirm-password"
          type="password"
          stack-label
          required
          outlined
          dense
          v-model="$v.user.confirmPassword.$model"
          :error-message="getMensagemErro($v.user.confirmPassword)"
          :error='$v.user.confirmPassword.$error'
        />
        <p/>
        <div class="row justify-center">
          <p style="color: #6E6E6E;">A sua senha deve ter no mínimo 6 caracteres</p>
        </div>
        <div class="row">
          <q-btn no-caps class="col-12" label="Cadastro" color="indigo-10" ref="btnSubmit" @click="postData()"></q-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { required, minLength, maxLength, sameAs } from 'vuelidate/lib/validators'
import Util from '../utils/util'

export default {
  name: 'Signup',
  data () {
    return {
      response: null,
      user: {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    }
  },
  validations: {
    user: {
      name: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(60)
      },
      email: {
        required,
        minLength: minLength(10),
        maxLength: maxLength(60)
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20)
      },
      confirmPassword: {
        required,
        sameAsPassword: sameAs('password')
      }
    }
  },
  methods: {
    ...mapActions('auth', ['signup']),
    getMensagemErro: Util.getMensagemErro,
    async postData () {
      try {
        this.$v.$touch()

        if (this.$v.$invalid) {
          return
        }

        await this.signup({ user: this.user })
      } catch (e) {
        if (e.response && e.response.data && e.response.data.message) {
          this.$q.notify({
            color: 'negative',
            message: e.data.message
          })
        } else {
          this.$q.notify({
            color: 'negative',
            message: e
          })
        }
      }
    }
  }
}
</script>

<style scoped>
  .title {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .title-text {
    font-weight: bold;
    color: navy;
  }
</style>
