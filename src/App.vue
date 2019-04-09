<template>
  <div id="app">
    <m-header/>
    <m-search/>
    <router-view/>
    <m-footer/>
    <m-service/>
  </div>
</template>

<script>
import MHeader from './components/public/header'
import MSearch from './components/public/search'
import MFooter from './components/public/footer'
import MService from './components/public/service'
export default {
  components: {
    MHeader,
    MSearch,
    MFooter,
    MService
  }
}
</script>

<style lang="sass">
@import url('assets/css/base.css');
</style>
