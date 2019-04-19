<template>
    <div class="m-finish-order">
      <div class="content">
        <div class="m-secondary">
          <span>
            <a href="/">首页</a>
          </span>
          <span>
            <a href="javascript:;">确认订单</a>
          </span>
        </div>
      </div>
      <div class="order-info content">
        <h2 class="tit">下单成功！</h2>
        <ul class="order-detail">
          <li>
            <span class="item-label">订单编号：</span>
            {{orderInfo.orderid}}
          </li>
          <li class="price">
            <span class="item-label">订单价格：</span>
            {{orderInfo.orderprice}}元
          </li>
          <li>
            <span class="item-label">收货信息：</span>
            <span class="item">{{orderInfo.clientname}} </span>
            <span class="item"> {{orderInfo.orderphone}} </span>
            <span class="item"> {{orderInfo.clientaddress}}</span>
          </li>
          <!--<li>
            <span class="item-label">商品名称：</span>
            <span>Sunshine Job男士磨毛弹力休闲长裤 藏青 S(165/72A) 1条/袋</span>
          </li>-->
          <li>
            <span class="item-label">配送时间：</span>
            不限送货时间
          </li>
          <li>
            <span class="item-label">发票类型：</span>
            <span class="item">不开发票</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      orderInfo: this.$store.state.orderInfo
    }
  },
  created () {
    if (!this.orderInfo) this.$router.push('/home')
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/finishOrder.scss"
</style>
