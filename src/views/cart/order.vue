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
              <div class="address-item" :class="item.isSelect ? 'selected' : 'unselect'" v-for="(item,index) of addressList" :key="index" v-show="index<showCount" @mouseenter="editItem=index" @mouseleave="editItem=-1">
                <div class="address-item-content">
                  <div class="mark" :class="!item.isSelect ? 'addr-hidden' : ''">默认</div>
                  <div class="container">
                    <div class="name">{{item.name}}</div>
                    <div class="tel">{{item.tel}}</div>
                    <div class="city">{{item.province}}（{{item.city}}）{{item.district}}{{item.street}}{{item.detailedAddr}}</div>
                    <div class="address">{{item.address}}</div>
                    <div class="city">{{item.postalCode}}</div>
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
            <span class="desc">在线支付（微信、支付宝）</span>
          </div>
          <div class="merchant clearfix">
            <div class="merchant-info clearfix">
              <span class="name">有品配送</span>
              <span class="threshold">（邮费：0.00元）</span>
            </div>
            <div class="merchant-spread">
              <div class="good-container clearfix">
                <p class="pro-support">
                  <a href="javascript:;" class="icon"></a>
                  支持7天无理由退货
                </p>
                <span class="img">
                  <img src="">
                </span>
                <span class="name">
                  <span class="product-name">Sunshine Job男士磨毛弹力休闲长裤 蓝色 M（170/76A)1条/袋</span>
                </span>
                <span class="total">
                  <span class="money">￥</span>
                  <span class="text">139</span>
                </span>
                <span class="price">139元x1</span>
              </div>
              <div class="form-item">
                <div class="left-label">买家留言</div>
                <span class="msg-container">
                <textarea class="user-msg" placeholder="填写内容需与商家协商并确认，45字以内" maxlength="45"></textarea>
              </span>
              </div>
              <span class="merchant-total clearfix">
                <span class="total">
                  共
                  <span class="red">1</span>
                  件商品，小计：
                  <span class="red">￥139</span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div class="checkout-summary clearfix">
          <div class="check-freeInfo fr">
            <div class="freeInfo-item">
              <span class="freeInfo-key">商品总价：</span>
              <span class="freeInfo-value">139.00元</span>
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
              <span class="freeInfo-value">￥139.00</span>
            </div>
          </div>
        </div>
        <div class="bottom-pay">
          <a href="javascript:;" class="btn">去下单</a>
        </div>
      </div>
      <m-add-address v-if="openAddAddress" @close="openAddAddress=false" @saveAddress="saveAddressInfo" :edit-addr-info="addressList[editIndex]"/>
    </div>
  </div>
</template>

<script>
import MAddAddress from './addAddress'
export default {
  data () {
    return {
      openAddAddress: false,
      addressList: [{
        name: '小虎牙',
        tel: '18291588119',
        province: '陕西',
        city: '西安市',
        district: '未央区',
        street: '张家堡街道',
        detailedAddr: '南康新村西门',
        postalCode: '710014',
        isSelect: false
      }, {
        name: '小虎牙',
        tel: '18291588119',
        province: '陕西',
        city: '西安市',
        district: '未央区',
        street: '张家堡街道',
        detailedAddr: '南康新村西门',
        postalCode: '710014',
        isSelect: false
      }, {
        name: '小虎牙',
        tel: '18291588119',
        province: '陕西',
        city: '西安市',
        district: '未央区',
        street: '张家堡街道',
        detailedAddr: '南康新村西门',
        postalCode: '710014',
        isSelect: true
      }, {
        name: '小虎牙',
        tel: '18291588119',
        province: '陕西',
        city: '西安市',
        district: '未央区',
        street: '张家堡街道',
        detailedAddr: '南康新村西门',
        postalCode: '710014',
        isSelect: false
      }, {
        name: '小虎牙',
        tel: '18291588119',
        province: '陕西',
        city: '西安市',
        district: '未央区',
        street: '张家堡街道',
        detailedAddr: '南康新村西门',
        postalCode: '710014',
        isSelect: false
      }],
      editItem: -1, // 地址列表下标
      showCount: 3, // 显示的地址个数
      editIndex: -1 // 要修改的地址下标
    }
  },
  components: {
    MAddAddress
  },
  methods: {
    openAddress () { // 打开添加地址
      this.openAddAddress = true
      this.editIndex = -1
    },
    showMoreAds () { // 显示更多的地址信息
      if (this.showCount === 3) this.showCount = this.addressList.length
      else this.showCount = 3
    },
    settingAddr (info, i) { // 修改默认地址
      info.isSelect = true
      for (let k in this.addressList) {
        if (parseInt(k) !== i) this.addressList[k].isSelect = false
      }
    },
    saveAddressInfo (adsInfo, editOradd) { // 保存修改或添加的地址
      if (editOradd) this.addressList[this.editIndex] = adsInfo
      else {
        this.addressList.unshift(adsInfo)
        this.settingAddr(adsInfo, 0)
      }
    },
    editAddress (i) { // 编辑当前下标地址
      this.editIndex = i
      this.openAddAddress = true
    },
    delAddress (i) { // 删除当前地址
      if (this.addressList[i].isSelect) {
        this.settingAddr(this.addressList[0], 0)
      }
      this.addressList.splice(i, 1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../../assets/scss/cart/order.scss"
</style>
