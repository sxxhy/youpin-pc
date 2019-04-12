<template>
  <div class="m-new-goods content">
    <div class="swiper">
      <div class="slide" ref="slide">
        <div class="item" v-for="(item,index) of goodsList" :key="index" style="width: 266px;margin-right: 5px;" @click="goDetail(item.type_id, item.classgoods_id)">
          <img :src="imgBaseURL + item.head_imgs">
          <div class="info">
            <p class="pro-info">{{item.sitename}}</p>
            <p class="pro-desc">{{item.title}}</p>
            <p class="pro-price">
              <span class="pro-unit">{{item.money}}</span>
              <span class="price">{{item.price}}</span>
              <span class="pro-flag">起</span>
            </p>
          </div>
        </div>
      </div>
      <div class="prev icon" @click="prev()" :class="this.count===0 ? 'disabled' : ''"></div>
      <div class="next icon" @click="next()" :class="this.count===this.goodsList.length - 4 || this.goodsList.length < 4 ? 'disabled' : ''"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 0
    }
  },
  methods: {
    prev () {
      if (this.count === 0) {
        return
      }
      this.count--
      this.$refs.slide.style.transform = `translate3d(-${this.count * 271}px,0,0)`
    },
    next () {
      if (this.count === this.goodsList.length - 4 || this.goodsList.length < 4) {
        return
      }
      this.count++
      this.$refs.slide.style.transform = `translate3d(-${this.count * 271}px,0,0)`
    },
    goDetail (tid, cid) {
      this.$router.push(`/detail/${tid}/${cid}`)
    }
  },
  props: ['goodsList']
}
</script>

<style lang="sass" scoped>
.m-new-goods
  position: relative;
  overflow: hidden;
  .swiper
    position: relative;
    overflow: hidden;
    margin: 0 auto;
    z-index: 2;
    .slide
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 3;
      display: -ms-flexbox;
      display: flex;
      box-sizing: content-box;
      transition: transform .3s ease;
      .item
        flex-shrink: 0;
        height: 100%;
        position: relative;
        width: 266px;
        text-align: center;
        background: #fff;
        transition: all .4s;
        cursor: pointer;
        float: left;
        &:hover
          box-shadow: 0 2px 20px rgba(0,0,0,.1);
          transform: translate3d(0,-2px,0);
        img
          width: 266px;
          height: 266px;
        .info
          padding-top: 13px;
          padding-bottom: 10px;
          p
            padding: 0 10px;
          .pro-info
            margin-top: 0;
            font-size: 19px;
            line-height: 23px;
            height: 23px;
          .pro-desc
            color: #666;
            font-size: 14px;
            line-height: 18px;
            height: 18px;
            margin-top: 8px;
          .pro-price
            margin-top: 11px;
            margin-bottom: 0;
            height: 26px;
            line-height: 26px;
            color: #a92112;
            .pro-unit
              font-size: 15px;
            .price
              font-size: 22px;
            .pro-flag
              font-size: 12px;
    .next,.prev
      margin-top: -28px;
      position: absolute;
      top: 50%;
      z-index: 10;
      cursor: pointer;
      width: 38px;
      height: 38px;
    .next
      right: 10px;
      background-position: 0 -1840px;
      &:hover
        background-position: 0 -1882px;
      &.disabled
        opacity: .35;
        cursor: auto;
    .prev
      left: 10px;
      background-position: 0 -1924px;
      &:hover
        background-position: 0 -1798px;
      &.disabled
        opacity: .35;
        cursor: auto;
</style>
