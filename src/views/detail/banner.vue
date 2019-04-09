<template>
  <div class="m-banner clearfix">
    <div class="main fl">
      <img :src="bannerList[0]" ref="headImg">
    </div>
    <div class="thumb fr">
      <div class="thumb-container" ref="thumb">
        <div class="thumb-pic" v-for="(item,index) of bannerList" :key="index" @click='getImg(index)' :class="imgIndex===index ? 'active' : ''">
          <img :src="item">
        </div>
      </div>
      <div class="thumb-arrow-up" @click="arrowUp()">
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
      bannerList: [
        'https://img.youpin.mi-img.com/goods/ab17b8de9146da039da640969907dd6c.jpg?_s=ks3',
        'https://img.youpin.mi-img.com/goods/f010ac70bbb0eebbc0865eac01a02068.jpg?_s=ks3',
        'https://img.youpin.mi-img.com/goods/f8b75d21560638fecd9cd598a1af80ad.jpg?_s=ks3',
        'https://img.youpin.mi-img.com/goods/e70dadca7e0de818aa4ccbb10299d37c.jpg?_s=ks3',
        'https://img.youpin.mi-img.com/goods/519728072fd6c45c5a32ac0d3a274b61.jpg?_s=ks3',
        'https://img.youpin.mi-img.com/goods/cbfdf9559d03dec1aff5d986785e7e1e.jpg?_s=ks3'
      ],
      imgIndex: 0
    }
  },
  methods: {
    getImg (i) {
      this.imgIndex = i
      this.$refs.headImg.src = this.bannerList[i]
    },
    arrowUp () {
      if (this.imgIndex === 0) {
        return
      }
      this.imgIndex--
      if (this.bannerList.length - this.imgIndex >= 3) {
        this.$refs.thumb.style.transform = `translate3d(0,${(this.imgIndex - 2) * 94}px,0)`
      }
    },
    arrowDown () {
      if (this.imgIndex === this.bannerList.length - 1) {
        return
      }
      this.imgIndex++
      if (this.bannerList.length - this.imgIndex >= 3) {
        this.$refs.thumb.style.transform = `translate3d(0,-${(this.bannerList.length - this.imgIndex) * 94}px,0)`
      }
    }
  }
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
      transition: top .3s ease;
      .thumb-pic
        width: 83px;
        height: 83px;
        margin-bottom: 11px;
        border-width: 1px;
        background-color: #f4f4f4;
        // transition: border .5s cubic-bezier(0,1,.5,1);
        cursor: pointer;
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
