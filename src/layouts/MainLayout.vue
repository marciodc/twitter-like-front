<template>
  <q-layout view="lHh Lpr lFf" style="background-color: #f6f3fd;">
    <div class="row justify-center">
      <div class="col-sm-12 col-md-8 shadow-1" style="height: 55px; background-color: #ffffff;">
        <div class="row items-center" style="height: 55px;">
          <div class="col-1 text-right"/>
          <div class="col-1 flex flex-center">
            <img
              src="~assets/snowman.png"
              style="width: 40px; height: 40px;"
            />
          </div>
          <div class="col-6 vertical-middle" v-if="!logged()"></div>
          <div class="col-1 vertical-middle" v-if="!logged()">
            <router-link to="/login">Login</router-link>
          </div>
          <div class="col-2" v-if="!logged()">
            <q-btn color="indigo" no-caps to="/signup">
              Cadastre-se
            </q-btn>
          </div>
          <div class="col-10 vertical-middle" v-if="logged()">
            <div class="row items-center justify-end">
              <div class="col-sm-8 col-md-3">
                <q-input
                  outlined
                  dense
                  label="Pesquisar"
                  type="search"
                  v-model="nameSearch"
                  @keyup.enter="search"
                  clearable
                >
                  <template v-slot:prepend>
                    <q-icon name="search" />
                  </template>
                </q-input>
              </div>
              <div class="q-pa-sm"></div>
              <div class="col-2 vertical-middle link_pointer" @click="logout">
                Sair
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'MainLayout',
  data () {
    return {
      nameSearch: ''
    }
  },
  methods: {
    ...mapGetters('auth', ['logged']),
    ...mapActions('auth', ['logout']),
    search () {
      this.$router.push('/search/' + this.nameSearch, () => {})
    }
  }
}
</script>

<style scoped>
  .shadow-box {
    width: 50px;
    height: 50px;
    margin: 5px;
    border-radius: 50%;
    font-size: 12px;
  }

  .link_pointer {
    cursor: pointer
  }

  a { text-decoration: none; color: #000000; }

</style>
