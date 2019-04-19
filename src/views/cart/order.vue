<template>
  <div class="m-order">
    <div class="wrapper">
      <div class="secondary">
        <span>
          <a href="/">首页</a>
        </span>
        <span>
          <router-link to="/cart">购物车</router-link>
        </span>
        <span>
          <a href="javascript:;">确认页</a>
        </span>
      </div>
      <div>
        <div class="address">
          <div class="title">收货地址</div>
          <div class="list clearfix">
            <div class="address-list">
              <div class="address-item" :class="item.isSelect ? 'selected' : 'unselect'" v-for="(item,index) of address" :key="index" v-show="index<showCount" @mouseenter="editItem=index" @mouseleave="editItem=-1">
                <div class="address-item-content">
                  <div class="mark" :class="!item.isSelect ? 'addr-hidden' : ''">默认</div>
                  <div class="container">
                    <div class="name">{{item.name}}</div>
                    <div class="tel">{{item.tel}}</div>
                    <div class="city">{{item.city}} {{item.area}} {{item.street}} {{item.detailedAddr}}</div>
                    <div class="city">{{item.postCode}}</div>
                    <div class="address">{{item.email}}</div>
                  </div>
                  <div class="update" v-show="editItem===index">
                    <span v-if="!item.isSelect" @click="settingAddr(item, index)">设为默认地址</span>
                    <span @click="editAddress(index)">修改</span>
                    <span @click="delAddress(index)">删除</span>
                  </div>
                </div>
              </div>
              <div class="address-item-add unselect address-item" @click="openAddress">
                <div class="add-icon">
                  <a href="javascript:;" class="icon"></a>
                </div>
                <div class="add-ads">添加新地址</div>
              </div>
            </div>
          </div>
          <div class="more-ads" @click="showMoreAds">
            <span class="text">{{showCount===3 ? '显示' : '收起'}}更多收货地址</span>
            <a href="javascript:;" class="icon icon-more-down" :class="showCount===3 ? 'icon-more-down' : 'icon-more-up'"></a>
          </div>
        </div>
        <div>
          <div class="form-item">
            <span class="left-label">支付方式</span>
            <span class="desc">信用卡、PayPal、货到付款</span>
            <div class="credit-box" @click="selectPay(2)">
              <a href="javascript:;" class="icon select-icon" :class="payment === 2 ? 'icon-check-active' : 'icon-check'"></a>
              <span class="name">
                信用卡支付
                <img src="../../assets/image/VISA.png">
                <img src="../../assets/image/credit2.png">
                <img src="../../assets/image/credit3.png">
                <img src="../../assets/image/credit4.png">
              </span>
            </div>
            <div class="cash-box" @click="selectPay(0)">
              <a href="javascript:;" class="icon select-icon" :class="payment === 0 ? 'icon-check-active' : 'icon-check'"></a>
              <span>货到付款</span>
            </div>
            <div class="paypal-box" @click="selectPay(1)">
              <a href="javascript:;" class="icon select-icon" :class="payment === 1 ? 'icon-check-active' : 'icon-check'"></a>
              <span>
                PayPal支付
                <img src="../../assets/image/PayPal.jpg">
              </span>
            </div>
          </div>
          <div class="merchant clearfix">
            <div class="merchant-info clearfix">
              <span class="name">有品配送</span>
              <span class="threshold">（邮费：0.00元）</span>
            </div>
            <div class="merchant-spread">
              <div class="good-container clearfix" v-for="(item,index) of orderList" :key="index">
                <p class="pro-support">
                  <a href="javascript:;" class="icon"></a>
                  支持7天无理由退货
                </p>
                <span class="img">
                  <img :src="imgBaseURL + item.img">
                </span>
                <span class="name">
                  <span class="product-name">{{item.name}} {{item.color}} {{item.size}} {{item.meal}}</span>
                </span>
                <span class="total">
                  <span class="money">{{item.money}}</span>
                  <span class="text">{{item.price * item.count}}</span>
                </span>
                <span class="price">{{item.price}}元x{{item.count}}</span>
              </div>
              <div class="form-item">
                <div class="left-label">买家留言</div>
                <span class="msg-container">
                <textarea class="user-msg" placeholder="填写内容需与商家协商并确认，45字以内" maxlength="45" v-model="leaveMsg"></textarea>
              </span>
              </div>
              <span class="merchant-total clearfix">
                <span class="total">
                  共
                  <span class="red">{{getCount}}</span>
                  件商品，小计：
                  <span class="red">{{siteInfo.money}}{{getTotalPrice}}</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="checkout-summary clearfix">
          <div class="check-freeInfo fr">
            <div class="freeInfo-item">
              <span class="freeInfo-key">商品总价：</span>
              <span class="freeInfo-value">{{getTotalPrice}}元</span>
            </div>
            <div class="freeInfo-item fee-map-item">
              <span class="freeInfo-key">运费 ：</span>
              <span class="freeInfo-value">0.00元</span>
            </div>
            <div class="freeInfo-item">
              <span class="freeInfo-key">优惠：</span>
              <span class="freeInfo-value">0.00元</span>
            </div>
            <div class="total">
              <span class="freeInfo-key">合计：</span>
              <span class="freeInfo-value">{{siteInfo.money}}{{getTotalPrice}}</span>
            </div>
          </div>
        </div>
        <div class="bottom-pay">
          <a href="javascript:;" class="btn" @click="goBuy">去下单</a>
        </div>
      </div>
      <m-add-address v-if="openAddAddress" @close="openAddAddress=false" @saveAddress="saveAddressInfo" :edit-addr-info="address[editIndex]"/>
      <m-credit v-if="creditOpen" @closeCredit="creditOpen = false" @creditPay="goBuy" @closeLoading="closeLoading" />
    </div>
  </div>
</template>

<script>
import MAddAddress from './addAddress'
import MCredit from './credit'
import { mapState, mapMutations } from 'vuex'
import { submitOrder } from '../../service/index'
import { creditPlgin } from '../../lib/util'
export default {
  data () {
    return {
      openAddAddress: false,
      orderList: [],
      editItem: -1, // 地址列表下标
      showCount: 3, // 显示的地址个数
      editIndex: -1, // 要修改的地址下标
      payment: 0, // 支付方式代号
      leaveMsg: '',
      creditOpen: false, // 信用卡页面打开
      submitCount: 0 // 提交次数
    }
  },
  components: {
    MAddAddress,
    MCredit
  },
  created () {
    this.orderList = this.cart.filter(item => {
      return item.isSelect === true
    })
  },
  methods: {
    ...mapMutations(['setAddress']),
    openAddress () { // 打开添加地址
      this.openAddAddress = true
      this.editIndex = -1
    },
    showMoreAds () { // 显示更多的地址信息
      if (this.showCount === 3) this.showCount = this.address.length
      else this.showCount = 3
    },
    settingAddr (info, i) { // 修改默认地址
      info.isSelect = true
      for (let k in this.address) {
        if (parseInt(k) !== i) this.address[k].isSelect = false
      }
      this.setAddress(this.address)
    },
    saveAddressInfo (adsInfo, editOradd) { // 保存修改或添加的地址
      if (editOradd) {
        this.address[this.editIndex] = adsInfo
        this.setAddress(this.address)
      } else {
        this.address.unshift(adsInfo)
        this.settingAddr(adsInfo, 0)
        this.setAddress(this.address)
      }
    },
    editAddress (i) { // 编辑当前下标地址
      this.editIndex = i
      this.openAddAddress = true
    },
    delAddress (i) { // 删除当前地址
      if (this.address[i].isSelect && i !== 0) {
        this.settingAddr(this.address[0], 0)
      }
      if (this.address[i].isSelect && i === 0 && !!this.address[1]) {
        this.settingAddr(this.address[1], 1)
      }
      this.address.splice(i, 1)
      this.setAddress(this.address)
    },
    selectPay (num) { // 选择支付方式
      this.payment = num
    },
    async goBuy (token) {
      if (this.address.length === 0) {
        this.$toast.top('请选择收货地址')
        return
      }
      if (this.submitCount === 1) {
        this.$toast.top('正在提交，请勿重复提交')
        return
      }
      let goods = this.cart.filter(item => {
        return item.isSelect === true
      })
      if (goods.length === 0) return
      let cartinfo = []
      let goodsinfo = []
      for (let item of goods) {
        cartinfo.push([{ number: item.count, sku: item.id, priceflag: 0 }])
        goodsinfo.push({ tid: item.tid, classgoodsid: item.cid })
      }
      let addr = this.address.filter(item => {
        return item.isSelect === true
      })[0]
      let clientinfo = {
        area: addr.area,
        city: addr.city,
        clientaddress: addr.detailedAddr,
        clientemail: addr.email,
        clientname: addr.name,
        clientotherinfo: this.leaveMsg,
        clientphone: addr.tel,
        frieight: '',
        money: this.siteInfo.money,
        payment: this.payment,
        store: '',
        store_delivery: '',
        token: ''
      }
      if (this.payment === 0) {
        this.submitCount = 1
        let data = await submitOrder({ cartinfo, goodsinfo, clientinfo, siteurl: window.location.href })
        if (data.Error) {
          this.submitCount = 0
          this.$toast.top('提交失败，请重试...')
          return
        }
        this.$store.state.orderInfo = data.orderInfo
        this.$router.push('/finishorder')
      }
      if (this.payment === 2 && this.creditOpen === true) { // 此处先后不能更换
        this.submitCount = 1
        if (token) {
          clientinfo.token = token
          let data = await submitOrder({ cartinfo, goodsinfo, clientinfo, siteurl: window.location.href })
          if (data.Error) {
            this.submitCount = 0
            this.$toast.top('提交失败，请重试...')
            return
          }
          this.$store.state.orderInfo = data.orderInfo
          this.$router.push('/finishorder')
        }
      }
      if (this.payment === 2) { // 此处先后不能更换
        this.creditOpen = true
        this.$loading('loading...')
      }
    },
    closeLoading () {
      this.$loading.close()
    }
  },
  computed: {
    ...mapState(['cart', 'siteInfo', 'address']),
    getCount () {
      let count = 0
      for (let item of this.orderList) {
        count += item.count
      }
      return count
    },
    getTotalPrice () {
      let price = 0
      for (let item of this.orderList) {
        price += item.count * item.price
      }
      return price
    }
  },
  mounted () {
    creditPlgin({
      id: 'spt',
      ele: 'script',
      src: 'https://js.stripe.com/v3/'
    })
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/scss/cart/order.scss"
</style>
