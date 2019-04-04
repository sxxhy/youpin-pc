<template>
  <div class="m-progress-wrap">
    <div class="m-bar-con">
      <div class="m-bar" :style="{ 'width': getSupport + '%'}"></div>
    </div>
    <div class="m-progress-info clearfix">
      <div class="fl m-suppory">
        <span class="sup-num">{{support}}</span>
        人支持
      </div>
      <span class="progress-tag-con fl">
        <span class="text">爆</span>
      </span>
      <div class="fr m-persent">
        <span class="m-num">{{getSupport}}</span>
        <span class="m-num-flag">%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
  props: ['support'],
  computed: {
    getSupport () {
      let num = this.support.toString()
      return ((num / 2) > 1000) ? num.substring(0, 3) : num / 2
    }
  }
}
</script>

<style lang="sass" scoped>
.m-progress-wrap
  .m-bar-con
    width: 100%;
    height: 3px;
    overflow: hidden;
    background: #e3e1e2;
    .m-bar
      width: 0;
      height: 100%;
      background: url(https://shop.io.mi-img.com/static/h5/static3/media/bar.64e546f1.jpg) 0 0 no-repeat;
  .m-progress-info
    margin-top: 10px;
    .m-suppory
      color: #999;
      font-size: 15px;
      margin-left: 20px;
      .sup-num
        margin-right: 6px;
        color: #a92112;
        font-size: 18px;
    .progress-tag-con
      text-align: center;
      height: 22px;
      padding-top: 2px;
      padding-bottom: 2px;
      overflow: hidden;
      display: inline-block;
      .text
        background-color: rgb(246, 39, 0);
        height: 22px;
        border-radius: 2px;
        vertical-align: bottom;
        padding: 0 6px;
        color: #fff;
        font-size: 13px;
        line-height: 22px;
        display: inline-block;
        margin-left: 3px;
    .m-persent
      margin-right: 15px;
      color: #a92112;
      font-size: 18px;
      .m-num
        color: #a92112;
        font-size: 18px;
      .m-num-flag
        font-size: 11px;
</style>
