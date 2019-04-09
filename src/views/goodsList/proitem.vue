<template>
  <div class="m-pro-item">
    <div class="pro-img">
      <img :src="goodInfo.img">
    </div>
    <p class="pro-info">{{goodInfo.name}}</p>
    <p class="pro-desc">{{goodInfo.title}}</p>
    <p class="pro-price">
      <span class="pro-unit">{{goodInfo.money}}</span>
      <span class="price">{{goodInfo.price}}</span>
      <span class="m-sale-tag">{{goodInfo.tag}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['goodInfo']
}
</script>

<style lang="sass" scoped>
.m-pro-item
  position: relative;
  float: left;
  width: 265px;
  padding-bottom: 10px;
  margin-left: 5px;
  margin-bottom: 5px;
  text-align: center;
  background: #fff;
  transition: all .4s;
  cursor: pointer;
  &:hover
    box-shadow: 0 2px 20px rgba(0,0,0,.1);
    transform: translate3d(0,-2px,0);
  p
    padding: 0 20px;
  .pro-img
    display: block;
    width: 100%;
    height: 195px;
    text-align: center;
    background: #fff;
    overflow: hidden;
    img
      width: 195px;
      height: auto;
  .pro-info
    height: 26px;
    line-height: 26px;
    margin-top: 10px;
    color: #333;
    font-size: 16px;
  .pro-desc
    height: 24px;
    line-height: 24px;
    font-size: 14px;
    color: #999;
  .pro-price
    color: #a92112;
    height: 26px;
    line-height: 26px;
    overflow: hidden;
    .pro-unit
      font-size: 12px;
      line-height: 26px;
    .price
    .m-sale-tag
      display: inline-block;
      height: 20px;
      line-height: 20px;
      padding: 0 6px;
      margin-left: 8px;
      background-color: #c00000;
      color: #fff;
      font-size: 12px;
      vertical-align: 2px;
      border-radius: 2px;
</style>
