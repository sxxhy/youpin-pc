<template>
  <div class="m-prodct">
    <div class="img-info">
      <div class="img">
        <img
          :src="good.img"
        >
      </div>
      <p class="pro-desc">{{good.title}}</p>
    </div>
    <div class="color-choose" v-if="good.colorCount">{{good.colorCount}}色可选</div>
    <div class="good-info">
      <div class="good-tag">
        <span class="tag-text" v-if="good.tag" :style="good.tag ? 'background-color: rgb(217, 107, 108)' : ''">{{good.tag}}</span>
      </div>
      <p class="pro-info">{{good.name}}</p>
      <p class="pro-price">
        <span class="pro-unit">{{good.money}}</span>
        <span class="m-num">{{good.price}}</span>
        <span class="pro-flag">起</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['good']
}
</script>

<style lang="sass" scoped>
.m-prodct
  width: 264px;
  padding-bottom: 0;
  margin-bottom: 5px;
  border: 1px solid #e7e7e7;
  background: none;
  position: relative;
  float: left;
  transition: all .4s;
  cursor: pointer;
  text-align: center;
  &:hover
    box-shadow: 0 2px 20px rgba(0,0,0,.1);
    transform: translate3d(0,-2px,0);
  p
    padding: 0 10px;
  .img-info
    width: 100%;
    .img
      width: 100%;
      height: 198px;
      overflow: hidden;
      padding: 45px 70px 28px;
      img
        height: 125px;
        width: 125px;
        margin-left: -0.5px;
    .pro-desc
      color: #845f3f;
      font-size: 16px;
      line-height: 20px;
      height: 20px;
      margin-top: 0;
  .color-choose
    position: absolute;
    padding: 3px;
    left: 8px;
    top: 8px;
    width: 24px;
    line-height: 18px;
    font-size: 15px;
    text-align: center;
    word-wrap: break-word;
    border-radius: 4px;
    border: 1px solid #9f8052;
    background-color: transparent;
    color: #9f8052;
  .good-info
    margin-top: 18px;
    padding: 13px 0 10px;
    background: #f8f8f8;
    .good-tag
      text-align: center;
      height: 20px;
      padding-top: 2px;
      padding-bottom: 2px;
      width: 100%;
      overflow: hidden;
      .tag-text
        padding: 0 6px;
        color: #fff;
        font-size: 14px;
        line-height: 20px;
        border-radius: 2px;
        vertical-align: bottom;
        display: inline-block;
        height: 20px;
        margin-left: 8px;
    .pro-info
      color: #333;
      margin-top: 10px;
      font-size: 18px;
      line-height: 22px;
      height: 22px;
    .pro-price
      margin-top: 11px;
      margin-bottom: 0;
      height: 22px;
      line-height: 22px;
      color: #a92112;
      .pro-unit
        margin-right: 5px;
        font-size: 13px;
      .m-num
        font-size: 20px;
      .pro-flag
        font-size: 12px;
</style>
