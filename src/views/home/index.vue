<template>
  <div class="m-home">
    <div class="banner-menu">
      <m-menu/>
      <m-banner/>
    </div>
  </div>
</template>
<script>
import MMenu from '../../components/public/menu'
import MBanner from './banner'
export default {
  components: {
    MMenu,
    MBanner
  }
}
</script>
<style lang="sass" scoped>
.m-home
  .banner-menu
    width: 1080px;
    margin: 0 auto;
    height: 358px;
</style>
