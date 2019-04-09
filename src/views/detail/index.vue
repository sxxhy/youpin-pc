<template>
  <div class="m-detail">
    <div class="content">
      <div class="header clearfix">
        <m-banner/>
        <m-sku/>
      </div>
      <div class="detail-content">
        <m-info/>
        <m-best/>
      </div>
    </div>
  </div>
</template>

<script>
import MBanner from './banner'
import MSku from './sku'
import MInfo from './info'
import MBest from './best'
export default {
  components: {
    MBanner,
    MSku,
    MInfo,
    MBest
  }
}
</script>

<style lang="sass" scoped>
.m-detail
  min-height: 285px;
  padding-top: 60px;
  padding-bottom: 100px;
  overflow: hidden;
  border-top: 1px solid #e7e7e7;
  /* &/deep/ *
    box-sizing: content-box; */
  .content
    min-height: inherit;
    position: relative;
    .header
      overflow: unset;
      margin-bottom: 67px;
    .detail-content
      overflow: hidden;
</style>
