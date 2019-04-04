<template>
  <div class="m-header">
    <div class="header-info content clearfix">
      <div class="fr">
        <div class="login-regist fl site-item">
          <a href="#" class="link">登录</a>
          <a href="#" class="link">注册</a>
        </div>
        <span class="line fl"></span>
        <div class="help fl site-item">
          <a href="#" class="link">帮助中心</a>
        </div>
        <span class="line fl"></span>
        <div class="download fl site-item">
          <a href="#" class="link">
            <span class="icon"></span>
            下载 APP
          </a>
        </div>
        <span class="line fl"></span>
        <div class="clauses-con fl">
          <div class="clauses">
            资质证照 / 协议规则
            <span class="icon"></span>
          </div>
          <div class="con-list">
            <a href="#" class="link">资质证照</a>
            <a href="#" class="link">协议规则</a>
          </div>
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
.m-header
  color: #e7e7e7;
  height: 48px;
  background: #333;
  font-size: 14px;
  position: relative;
  z-index: 105;
  .link
    color: #e7e7e7;
    &:hover
      color: #fff;
  .fr
    .site-item
      position: relative;
      margin-left: 5px;
      text-align: center;
    .line
      border-color: #666;
      margin: 17px 3px 0 6px;
      display: inline-block;
      height: 16px;
      vertical-align: middle;
      border-right: 1px solid #e7e7e7;
    .login-regist
      margin-right: 8px;
      .link
        margin-left: 8px
    .help,.login-regist,.download
      position: relative;
      line-height: 48px;
      height: 48px;
    .help
      margin-right: 8px;
      margin-left: 11px;
    .download
      .link
        text-align: left;
        left: 0;
        padding-left: 30px;
        display: block;
        height: 48px;
        line-height: 48px;
        overflow: hidden;
        .icon
          left: 0;
          top: 9px;
          position: absolute;
          width: 30px;
          height: 30px;
          background-position: 0 -1016px;
    .clauses-con
      position: relative;
      text-align: center;
      padding-right: 40px;
      padding-left: 11px;
      cursor: pointer;
      &:hover
          color: #fff;
          .con-list
            height: 70px;
            opacity: 1;
      .clauses
        height: 48px;
        line-height: 48px;
        text-align: center;
        .icon
          right: 10px;
          top: 10px;
          position: absolute;
          width: 30px;
          height: 30px;
          background-position: 0 -1662px;
      .con-list
        height: 0;
        opacity: 0;
        width: 160px;
        position: absolute;
        left: 0;
        top: 48px;
        display: block;
        overflow: hidden;
        transition: all .3s cubic-bezier(0,1,.5,1);
        background: #fff;
        .link
          display: block;
          height: 35px;
          line-height: 35px;
          padding: 0 10px;
          color: #666;
          border-radius: 3px;
          &:hover
            background: #845f3f;
            color: #fff;
</style>
