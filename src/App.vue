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
import { getSiteInfo } from './service'
import { mapState, mapMutations } from 'vuex'
export default {
  components: {
    MHeader,
    MSearch,
    MFooter,
    MService
  },
  async created () {
    const data = await getSiteInfo()
    if (!data.error) {
      this.setSite(data.site)
      this.setSiteClass(data.site_class)
      this.setLanguage(data.lang)
    }
  },
  methods: {
    ...mapMutations(['setSite', 'setSiteClass', 'setLanguage'])
  },
  computed: {
    ...mapState(['language']),
    lang () {
      return function (str) {
        return this.language ? this.language[str] : ''
      }
    }
  }
}
</script>

<style lang="sass">
@import url('assets/css/base.css')
</style>
