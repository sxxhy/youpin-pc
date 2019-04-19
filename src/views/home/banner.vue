<template>
  <div class="m-banner">
     <div class="swiper-container" @mouseenter="setTimer" @mouseleave="getTimer">
       <div class="swiper-wraper" ref="swiper">
         <router-link :to="`/detail/${item.type_id}/${item.classgoods_id}`" class="swiper-slide" v-for="(item,index) of bannerList" :key="index">
           <img :src="imgBaseURL + item.head_img" class="swiper-item">
         </router-link>
       </div>
       <div class="swiper-pagination">
         <span class="swiper-pagination-item" v-for="(item,index) of bannerList" :key="index" :class="value === index ? 'active' : ''" @click="setValue(index)"></span>
       </div>
       <div class="swiper-btn-prev icon" @click="prev"></div>
       <div class="swiper-btn-next icon" @click="next"></div>
     </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      timer: ''
    }
  },
  props: ['bannerList'],
  watch: {
    'bannerList' () {
      if (this.bannerList) {
        this.getTimer()
      }
    },
    'value' () {
      this.$refs.swiper.style.transform = `translate3d(-${this.value * 859}px, 0, 0)`
    }
  },
  methods: {
    getTimer () {
      let self = this
      this.timer = setInterval(function () {
        self.value++
        if (self.value > self.bannerList.length - 1) {
          self.value = 0
        }
      }, 3000)
    },
    setTimer () {
      clearInterval(this.timer)
    },
    prev () {
      this.value--
      if (this.value < 0) {
        this.value = this.bannerList.length - 1
      }
    },
    next () {
      this.value++
      if (this.value > this.bannerList.length - 1) {
        this.value = 0
      }
    },
    setValue (i) {
      this.value = i
    }
  }
}
</script>

<style scoped lang="sass">
.m-banner
  width: 859px;
  float: left;
  height: 100%;
  .swiper-container
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    z-index: 2;
    .swiper-wraper
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 3;
      display: flex;
      box-sizing: content-box;
      transition: transform .8s;
      .swiper-slide
        width: 859px;
        font-weight: 700;
        color: #14ade5;
        font-size: 20px;
        flex-shrink: 0;
        height: 100%;
        position: relative;
        .swiper-item
          height: 358px;
          width: 100%;
    .swiper-pagination
      bottom: 10px;
      left: 0;
      width: 100%;
      position: absolute;
      text-align: center;
      transition: .3s;
      transform: translateZ(0);
      z-index: 5;
      .swiper-pagination-item
        margin: 0 6px;
        cursor: pointer;
        width: 8px;
        height: 8px;
        display: inline-block;
        border-radius: 500px;
        color: transparent;
        outline: 0;
        border: 1px solid #cecece;
        background: #fff;
        transition: all .5s;
        &.active
          box-shadow: 0 0 0 4px #ccc;
          background: #a7936e;
          border-radius: 500px;
          border: none;
    .swiper-btn-prev, .swiper-btn-next
      position: absolute;
      top: 50%;
      margin-top: -22px;
      z-index: 5;
      cursor: pointer;
      width: 38px;
      height: 38px;
    .swiper-btn-prev
      left: 10px;
      background-position: 0 -1924px;
      &:hover
        background-position: 0 -1798px;
    .swiper-btn-next
      right: 10px;
      background-position: 0 -1840px;
      &:hover
        background-position: 0 -1882px;
</style>
