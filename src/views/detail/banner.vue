<template>
  <div class="m-banner clearfix">
    <div class="main fl">
      <img :src="bannerList ? imgBaseURL + bannerList[imgIndex] : ''" ref="headImg">
    </div>
    <div class="thumb fr">
      <div class="thumb-container" ref="thumb">
        <div class="thumb-pic" v-for="(item,index) of bannerList" :key="index" @click='getImg(index,$event)' :class="imgIndex===index ? 'active' : ''">
          <img :src="imgBaseURL + item">
        </div>
      </div>
      <div class="thumb-arrow-up" @click="arrowUp($event)">
        <a href="javascript:;" class="icon"></a>
      </div>
      <div class="thumb-arrow-down" @click="arrowDown()">
        <a href="javascript:;" class="icon"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      imgIndex: 0,
      trans: 0
    }
  },
  methods: {
    getImg (i, e) {
      if (i === this.imgIndex) return
      this.imgIndex = i
      this.$refs.headImg.src = this.bannerList[i]
      var ele = e.target
      var num = (Math.ceil(ele.offsetTop - this.trans)) / 94
      if (num === 3 && parseInt(i) !== this.bannerList.length - 1) {
        console.log(ele.offsetTop)
        this.trans = (i - 2) * 94
        this.$refs.thumb.style.transform = `translate3d(0,-${this.trans}px,0)`
      }
      if (Math.ceil(ele.offsetTop) - this.trans === 0 && this.trans !== 0) {
        this.trans = this.trans - 94
        this.$refs.thumb.style.transform = `translate3d(0, -${this.trans}px, 0)`
      }
    },
    arrowUp (e) {
      if (this.imgIndex === 0) {
        return
      }
      this.imgIndex--
      var ele = document.querySelector('.thumb-pic.active')
      if (Math.ceil(ele.offsetTop) - this.trans === 94 && this.trans !== 0) {
        this.trans = this.trans - 94
        this.$refs.thumb.style.transform = `translate3d(0, -${this.trans}px, 0)`
      }
    },
    arrowDown () {
      if (this.imgIndex === this.bannerList.length - 1) {
        return
      }
      this.imgIndex++
      var ele = document.querySelector('.thumb-pic.active')
      var num = (Math.ceil(ele.offsetTop - this.trans)) / 94
      if (num === 2 && this.imgIndex !== this.bannerList.length - 1) {
        this.trans = (this.imgIndex - 2) * 94
        this.$refs.thumb.style.transform = `translate3d(0,-${this.trans}px,0)`
      }
    }
  },
  props: ['bannerList']
}
</script>

<style lang="sass" scoped>
.m-banner
  margin-right: 46px;
  width: 465px;
  height: 374px;
  float: left;
  .main
    width: 372px;
    height: 372px;
    background-color: #f4f4f4;
    border: 1px solid #ececec;
    position: relative;
    img
      width: 100%;
      height: 100%;
  .thumb
    display: block;
    width: 85px;
    height: 100%;
    position: relative;
    overflow: hidden;
    &:hover
      .thumb-arrow-up
        display: block;
      .thumb-arrow-down
        display: block;
    .thumb-container
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .3s ease;
      .thumb-pic
        width: 83px;
        height: 83px;
        margin-bottom: 11px;
        border-width: 1px;
        background-color: #f4f4f4;
        // transition: border .5s cubic-bezier(0,1,.5,1);
        cursor: pointer;
        box-sizing: border-box;
        &.active
          border-style: solid;
        img
          width: 100%;
          height: 100%;
    .thumb-arrow-up
      position: absolute;
      top: 0;
      left: 0;
      display: none;
      a
        width: 85px;
        height: 16px;
        background-position: 0 -255px;
    .thumb-arrow-down
      position: absolute;
      top: 358px;
      left: 0;
      display: none;
      a
        width: 85px;
        height: 16px;
        background-position: 0 -195px;
</style>
