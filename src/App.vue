<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import ApiService from './services/api.service'

export default {
  name: 'App',
  beforeMount () {
    ApiService.setHeaderForm()
  }
}
</script>
