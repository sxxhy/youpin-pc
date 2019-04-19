<template>
  <div class="m-info fl">
    <div class="nav-title">
      <ul class="info-nav clearfix">
        <li class="info-nav-item" v-for="(item,index) of infolList" :key="index" @click="foucs(index)">{{item}}</li>
      </ul>
      <div class="nav-line">
        <div class="line" ref="line"></div>
      </div>
    </div>
    <div class="main-body" v-html="contentInfo"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      infolList: ['产品详情', '评论', '常见问题', '检测报告']
    }
  },
  methods: {
    foucs (i) {
      this.$refs.line.style.left = `${i * 128}px`
    }
  },
  props: ['contentInfo']
}
</script>

<style lang="sass" scoped>
.m-info
  width: 774px;
  .nav-title
    width: 774px;
    background-color: #e7e7e7;
    z-index: 5;
    .info-nav
      height: 10px;
      overflow: hidden;
      padding: 16px 0 13px;
      .info-nav-item
        border-right-color: rgb(204, 204, 204);
        width: 128px;
        float: left;
        height: 13px;
        border-right-width: 1px;
        border-right-style: solid;
        line-height: 13px;
        font-size: 13px;
        text-align: center;
        &:hover
          color: #845f3f;
          cursor: pointer;
    .nav-line
      height: 2px;
      position: relative;
      .line
        position: absolute;
        height: 2px;
        background-color: #845f3f;
        transition: left .2s linear;
        left: 0px;
        width: 128px;
  .main-body
    min-height: 900px;
    font-size: 0;
    &/deep/ img
      width: 100% !important;
      height: auto;
</style>
