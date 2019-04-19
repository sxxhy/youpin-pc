<template>
  <div class="m-detail">
    <div class="content">
      <div class="header clearfix">
        <m-banner :banner-list="detailInfo.head_imgs"/>
        <m-sku :pro-info="detailInfo"/>
      </div>
      <div class="detail-content">
        <m-info :content-info="detailInfo.content"/>
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
import { getDetailInfo } from '../../service/index'
export default {
  data () {
    return {
      detailInfo: {}
    }
  },
  components: {
    MBanner,
    MSku,
    MInfo,
    MBest
  },
  async created () {
    this.detailInfo = await getDetailInfo(this.$route.params.tid, this.$route.params.id)
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
