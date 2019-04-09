<template>
  <div class="m-footer" :style="{ 'margin-top': $route.name === 'home' ? '60px' : '' }">
    <div class="content clearfix">
      <div class="fl logo">
        <img src="https://shop.io.mi-img.com/static/h5/static3/media/logo.d1484e61.png" alt="logo">
      </div>
      <div class="f-info fr">
        <div class="f-icons">
          <a href="#">
            <img src="https://shop.io.mi-img.com/static/h5/static3/media/f-logo.c6285587.png">
          </a>
        </div>
        <div>
          <p class="footer-item">
            <span>©xiaomiyoupin.com</span>
            <span>苏B2-20180351 苏ICP备18025642号-1</span>
            <img
              src="https://shop.io.mi-img.com/static/h5/static3/media/record-icon.d0289dc0.png"
              alt="logo"
              style="width: 15px; height: 15px; vertical-align: -3px;"
            >
            <a
              href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=32010502010244"
              target="_blank"
              rel="noopener noreferrer"
            >苏公网安备 32010502010244号</a>
          </p>
          <p class="footer-item">
            <span>企业名称：有品信息科技有限公司</span>
            <a
              href="https://www.xiaomiyoupin.com/app/shop/content?id=qf58f1039488314e3"
              target="_blank"
              rel="noopener noreferrer"
            >关于我们</a>
            <a href="https://zhaoshang.youpin.mi.com" target="_blank" rel="noopener noreferrer">入驻有品</a>
          </p>
          <p class="footer-item">
            <a
              href="https://www.xiaomiyoupin.com/app/shop/content?id=s2426f03987ef05b5"
              target="_blank"
              rel="noopener noreferrer"
            >小米有品平台运营主体变更公告</a>
          </p>
          <p class="footer-item">
            <span>南京市建邺区白龙江东街8号3栋9层</span>
            <span>联系方式: 400-100-5678</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="sass" scoped>
.m-footer
  padding: 45px 0;
  height: 45px;
  line-height: 23px;
  border-top: 1px solid #e7e7e7;
  background-color: #fff;
  color: #666;
  .content
    .logo
      img
        width: 123px;
        height: 45px;
        margin-right: 25px;
    .f-info
      position: relative;
      padding-right: 138px;
      font-size: 12px;
      .f-icons
        position: absolute;
        top: 4px;
        right: 0;
        padding-left: 14px;
        a
          img
            width: 100px;
      .footer-item
        span
          margin-right: 5px;
        img
          width: 15px;
          height: 15px;
          vertical-align: -3px;
        a
          color: #666;
          margin-right: 8px;
</style>
