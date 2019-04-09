<template>
  <div class="m-search clearfix" :class="{ 'fixed': scroll>370, 'animation': scroll>200 && scroll<370 }">
    <div class="content clearfix">
      <div class="logo fl"></div>
      <div class="nav-part fl">
        <div class="menu-container">
          <span>分类</span>
          <span class="icon down-icon"></span>
          <div class="menu-box">
            <m-menu/>
          </div>
        </div>
      </div>
      <ul class="tab-list fl">
        <li class="tab-item fl">限时抢购</li>
        <li class="tab-item fl">星品驾到</li>
      </ul>
      <div class="card fr">
        <a href="#" class="link icon"></a>
      </div>
      <div class="search fr" :class="isFocus ? 'active' : ''">
        <div class="search-form">
          <a href="#" class="link icon"></a>
          <div class="search-input">
            <input type="text" placeholder="领460元神券 专区1元秒杀" @focus="isFocus=true" @blur="isFocus=false">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MMenu from './menu'
export default {
  data () {
    return {
      isFocus: false,
      scroll: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  },
  methods: {
    scrollTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scroll = scrollTop
    }
  },
  components: {
    MMenu
  }
}
</script>
<style lang="sass" scoped>
.m-search
  position: relative;
  height: 51px;
  z-index: 101;
  margin-top: 20px;
  margin-bottom: 5px;
  background-color: #fff;
  &.animation
    width: 100%;
    top: -51px;
    margin-top: 0px;
    border-bottom: 0;
    opacity: 0;
  &.fixed
    position: fixed;
    width: 100%;
    top: 0;
    margin-top: 0px;
    border-bottom: 1px solid #eee;
    opacity: 1;
    transition: all .3s ease;
    .nav-part
      &:hover
        .menu-box
          display: block !important;
      .menu-container
        display: inline-block !important;
  .content
    position: relative;
    padding-right: 40px;
    z-index: 9;
    .logo
      width: 123px;
      height: 51px;
      cursor: pointer;
      background: url('../../assets/image/logo.png') 50% no-repeat;
      background-size: 100%;
    .nav-part
      margin-left: 10px;
      margin-right: 70px;
      width: 60px;
      height: 51px;
      line-height: 51px;
      .menu-container
        display: none;
        padding: 0 5px;
        vertical-align: middle;
        width: 58px;
        height: 24px;
        line-height: 24px;
        border: 1px solid #efefef;
        font-size: 14px;
        cursor: pointer;
      .icon.down-icon
        top: 12px;
        position: absolute;
        width: 30px;
        height: 30px;
        background-position: 0 -1662px;
      .menu-box
        display: none;
        width: 100%;
        left: 0;
        right: 0;
        position: absolute;
        top: 100%;
    .tab-list
      width: 420px;
      overflow: hidden;
      .tab-item
        margin-right: 32px;
        height: 51px;
        line-height: 57px;
        font-size: 18px;
        color: #666;
        transition: color .2s ease;
        &:hover
          color: #845f3f;
          cursor: pointer;
    .card
      position: absolute;
      right: 6px;
      top: 18px;
      .link
        position: relative;
        width: 30px;
        height: 30px;
        background-position: 0 -948px;
        &:hover
          background-position: 0 -1186px;
    .search
      width: 296px;
      border-bottom: 1px solid #e7e7e7;
      transition: all .3s;
      &.active
        border-bottom: 1px solid #845f3f;
      .search-form
        position: relative;
        width: 246px;
        padding-left: 35px;
        padding-top: 9px;
        height: 43px;
        .link
          position: absolute;
          left: -4px;
          top: 10px;
          display: block;
          z-index: 2;
          text-align: center;
          outline: 0;
          width: 30px;
          height: 30px;
          background-position: 0 -1458px;
          &:hover
            background-position: 0 -1424px;
        .search-input
          z-index: 1;
          width: 245px;
          height: 32px;
          line-height: 32px;
          input
            width: 100%;
            border: none;
            color: #333;
            font-size: 14px;
            outline: 0;
            transition: all .2s;
            padding: 1px 0;
</style>
