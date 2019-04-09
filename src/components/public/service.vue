<template>
  <div class="m-service">
    <ul class="list">
      <li>
        <a href="javascript:;" class="icon service-icon"></a>
        <p class="text">联系客服</p>
        <div class="fixed-pop service-pop">
          <div class="pop-inner">
            <p class="info-title">小米有品平台问题，建议反馈，商户和物流问题投诉等请拨打 小米有品客服热线</p>
            <p class="info-phone">400-100-1199</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
            <p class="info-des">小米/米家自营品牌，手机电视智能硬件商品或订单发货/退款售后问题 请拨打小米自营客服热线</p>
            <p class="info-phone">400-100-5678</p>
            <p class="info-day">(周一至周日 8：00-18：00)</p>
          </div>
          <a href="javascript:;" class="icon arow-right-icon"></a>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="icon download-icon"></a>
        <p class="text">下载APP</p>
        <div class="fixed-pop down-pop">
          <div class="pop-inner">
            <img src="https://shop.io.mi-img.com/static/h5/static3/media/code.90b4b51a.png" class="qr-code">
            <p class="site-info">
              下载小米有品APP
              <br>
              得新人礼包
            </p>
          </div>
          <a href="javascript:;" class="icon arow-right-icon"></a>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="icon gift-icon"></a>
        <p class="text">新人有礼</p>
        <div class="fixed-pop gift-pop">
          <div class="pop-inner">
            <div class="gift-bg"></div>
            <img class="qr-code" src="https://shop.io.mi-img.com/static/h5/static3/media/code.90b4b51a.png">
            <p class="site-info">立即扫码下载·小米有品 APP</p>
          </div>
          <a href="javascript:;" class="icon arow-right-icon"></a>
        </div>
      </li>
      <li>
        <a href="javascript:;" class="icon wx-icon"></a>
        <p class="text">关注微信</p>
        <div class="fixed-pop wx-pop">
          <div class="pop-inner">
            <img class="qr-code" src="https://shop.io.mi-img.com/static/h5/static3/media/wx_code.d0d26888.jpg">
            <p class="site-info">扫码关注【小米有品生活电商】微信服务号，赢取小爱mini活动哦</p>
          </div>
          <a href="javascript:;" class="icon arow-right-icon"></a>
        </div>
      </li>
      <li @click="toTop">
        <a href="javascript:;" class="icon top-icon"></a>
        <p class="text">回到顶部</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: 0,
      timer: ''
    }
  },
  methods: {
    toTop () {
      this.timer = setInterval(() => {
        this.scroll -= 50
        document.documentElement.scrollTop = this.scroll
      }, 10)
    },
    scrollTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scroll = scrollTop
      if (this.scroll === 0) {
        clearInterval(this.timer)
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  }
}
</script>

<style lang="sass" scoped>
.m-service
  position: fixed;
  top: 220px;
  right: 10px;
  z-index: 999;
  width: 71px;
  background: #fff;
  box-shadow: 0 0 18px rgba(0,0,0,.1);
  box-sizing: content-box;
  .list
    li
      padding: 10px;
      font-size: 12px;
      text-align: center;
      border-bottom: 1px solid #e7e7e7;
      cursor: pointer;
      position: relative;
      box-sizing: content-box;
      &:hover
        .fixed-pop
          display: block;
        .service-icon
          background-position: 0 -1594px;
        .text
          color: #845f3f;
        .download-icon
          background-position: 0 -1220px;
        .gift-icon
          background-position: 0 -744px;
        .wx-icon
          background-position: 0 -1764px;
        .top-icon
          background-position: 0 -1322px;
      .icon
        width: 30px;
        height: 30px;
      .service-pop
        width: 250px;
        left: -244px;
        .pop-inner
          padding: 10px 18px;
          border: 1px solid #dfdfdf;
          background: #fff;
          .info-title
            margin-top: 8px;
            color: #333;
            font-size: 12px;
          .info-phone
            margin-top: 15px;
            color: #845f3f;
            font-size: 20px;
          .info-day
            margin-top: 1px;
            color: #666;
            font-size: 12px;
          .info-des
            margin-top: 18px;
            color: #333;
            font-size: 12px;
      .down-pop
        width: 150px;
        overflow: hidden;
      .gift-pop
        height: 328px;
        overflow: hidden;
        left: -226px;
        .gift-bg
          width: 190px;
          height: 152px;
          margin-bottom: 20px;
          background: url(https://shop.io.mi-img.com/static/h5/static3/media/gift-gd.3f999fde.png) 50% no-repeat;
          background-size: 100%;
        .qr-code
          padding: 8px;
          border: 1px solid #e7e7e7;
      .wx-pop
        width: 230px;
        left: -224px;
        .qr-code
          width: 120px;
          height: 120px;
  .service-icon
    background-position: 0 -1628px;
  .download-icon
    background-position: 0 -1254px;
  .gift-icon
    background-position: 0 -778px;
  .wx-icon
    background-position: 0 -982px;
  .top-icon
    background-position: 0 -1288px;
  .fixed-pop
    position: absolute;
    left: -144px;
    top: 0;
    display: none;
    padding-right: 20px;
    .arow-right-icon.icon
      position: absolute;
      right: 15px;
      top: 15px;
      width: 6px;
      height: 12px;
      background-position: 0 -38px;
  .pop-inner
    padding: 10px;
    border: 1px solid #dfdfdf;
    background: #fff;
  .qr-code
    display: block;
    width: 88px;
    height: 88px;
    margin: 0 auto 10px;
</style>
