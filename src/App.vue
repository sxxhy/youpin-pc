<template>
  <div id="app">
    <m-header/>
    <m-search/>
    <router-view/>
  </div>
</template>

<script>
import MHeader from './components/public/header'
import MSearch from './components/public/search'
export default {
  components: {
    MHeader,
    MSearch
  }
}
</script>

<style lang="sass">
@import url('assets/css/base.css');
</style>
