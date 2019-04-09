<template>
  <div class="m-home">
    <div class="banner-menu">
      <m-menu/>
      <m-banner/>
    </div>
    <m-hero/>
    <m-section class="m-h-crowdfounding" v-for="(item,index) of 4" :key="index">
      <span slot="subtitle" class="subtitle">永远好奇 永远年轻</span>
      <div slot="mHContainer" v-if="index===0">
        <m-crowdfounding :index="index"/>
      </div>
      <div slot="mHContainer" v-if="index===1">
        <m-new-goods/>
      </div>
      <div slot="mHContainer" v-if="index===2">
        <m-new-goods/>
      </div>
      <div slot="mHContainer" v-if="index===3">
        <m-new-goods/>
      </div>
    </m-section>
    <m-recommend/>
  </div>
</template>
<script>
import MMenu from '../../components/public/menu'
import MBanner from './banner'
import MHero from './hero'
import MSection from './section'
import MCrowdfounding from './crowdfounding'
import MNewGoods from './newGoods'
import MRecommend from './recommend'
export default {
  components: {
    MMenu,
    MBanner,
    MHero,
    MSection,
    MCrowdfounding,
    MNewGoods,
    MRecommend
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
