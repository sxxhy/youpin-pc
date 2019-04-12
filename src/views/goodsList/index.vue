<template>
  <div class="m-goodsList">
    <div class="content">
      <div class="secondary-navigator">
        <span>
          <a href="/">首页</a>
        </span>
        <span>
          <a href="javascript:;">{{goodsList.name}}</a>
        </span>
      </div>
      <m-type-goods v-for="(item,index) of goodsList.subclass" :key="index" :pro-info="item"/>
    </div>
  </div>
</template>

<script>
import MTypeGoods from './typeGoods'
import { getGoodsList } from '../../service/index'
export default {
  data () {
    return {
      goodsList: []
    }
  },
  components: {
    MTypeGoods
  },
  async created () {
    this.goodsList = await getGoodsList(this.$route.params.id)
  }
}
</script>

<style lang="sass" scoped>
.m-goodsList
  background: #f2f2f2;
  padding-bottom: 80px;
  .content
    .secondary-navigator
      padding-bottom: 15px;
      padding: 30px 0;
      width: 100%;
      display: block;
      float: none;
      background: transparent repeat 0 0 none;
      font-size: 13px;
      span
        a
          margin: 0 6px;
          cursor: pointer;
          color: #000;
      span:first-child
        &::after
          content: '>'
        a
          margin: 0 6px;
          cursor: pointer;
          color: #000;
      span:last-child
        a
          color: #999;
          cursor: default;
</style>
