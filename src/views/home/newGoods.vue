<template>
  <div class="m-new-goods content">
    <div class="swiper">
      <div class="slide">
        <div class="item" v-for="(item,index) of 8" :key="index" style="width: 265px;margin-right: 5px;">
          <img src="https://img.youpin.mi-img.com/goods/4ea30fd779f29632d86815df85625fd3.jpg">
          <div class="info">
            <p class="pro-info">智能浴霸</p>
            <p class="pro-desc">米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约</p>
            <p class="pro-price">
              <span class="pro-unit">¥</span>
              <span class="price">799</span>
              <span class="pro-flag">起</span>
            </p>
          </div>
        </div>
      </div>
      <div class="next disabled icon"></div>
      <div class="prev icon"></div>
    </div>
  </div>
</template>

<script>
export default {

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
      .item
        flex-shrink: 0;
        width: 100%;
        height: 100%;
        position: relative;
        width: 266px;
        margin-left: 5px;
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
