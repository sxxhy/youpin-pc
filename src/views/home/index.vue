<template>
  <div class="m-home">
    <div class="banner-menu">
      <m-menu/>
      <m-banner :banner-list="homeInfo.banner"/>
    </div>
<!--    <m-hero/>-->
    <m-section>
      <div slot="mHContainer">
        <m-crowdfounding/>
      </div>
    </m-section>
    <m-section class="m-h-crowdfounding" v-for="(item,index) of homeInfo.goods" :key="index" :title="item[0].title">
      <span slot="subtitle" class="subtitle">永远好奇 永远年轻</span>
      <div slot="mHContainer">
        <m-new-goods :goods-list="item"/>
      </div>
    </m-section>
    <m-recommend/>
  </div>
</template>
<script>
import MMenu from '../../components/public/menu'
import MBanner from './banner'
// import MHero from './hero'
import MSection from './section'
import MCrowdfounding from './crowdfounding'
import MNewGoods from './newGoods'
import MRecommend from './recommend'
import { getHomeInfo } from '../../service/index'
export default {
  data () {
    return {
      homeInfo: {}
    }
  },
  components: {
    MMenu,
    MBanner,
    // MHero,
    MSection,
    MCrowdfounding,
    MNewGoods,
    MRecommend
  },
  async created () {
    this.homeInfo = await getHomeInfo()
  }
}
</script>
<style lang="sass" scoped>
.m-home
  .banner-menu
    width: 1080px;
    margin: 0 auto;
    height: 358px;
  .m-h-crowdfounding
    margin-top: 35px;
    .subtitle
      margin-left: 12px;
      font-size: 14px;
      color: #999;
      font-weight: 400;
</style>
