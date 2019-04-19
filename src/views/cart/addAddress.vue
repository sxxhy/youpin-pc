<template>
    <div class="m-add-address">
      <div class="add-container">
        <div class="modal">
          <div class="modal-data">
            <div class="title">
              <div class="mark">添加收货地址</div>
              <div class="close">
                <a href="javascript:;" class="icon" @click="close"></a>
              </div>
            </div>
            <div class="line"></div>
            <div class="input-box">
              <div class="input-u">
                <input type="text" placeholder="姓名" class="input" :class="checkMsg.nameMsg!=='' ? 'error' : ''" v-model="addressInfo.name" @blur="checkName">
                <a href="javascript:;" class="icon icon-error" v-if="checkMsg.nameMsg!==''"></a>
                <div class="hint error">{{checkMsg.nameMsg}}</div>
              </div>
              <div class="input-u">
                <input type="text" placeholder="手机号" class="input" :class="checkMsg.telMsg!=='' ? 'error' : ''" v-model="addressInfo.tel" @blur="checkTel">
                <a href="javascript:;" class="icon icon-error" v-if="checkMsg.telMsg!==''"></a>
                <div class="hint error">{{checkMsg.telMsg}}</div>
              </div>
            </div>
            <div class="input-box2">
              <div class="input-u">
                <select name="" id="city" @change="getArea" v-model="addressInfo.city">
                  <option value="">- - 请选择城市 - -</option>
                  <option :value="item.city" v-for="(item,index) of citys" :key="index">{{item.city}}</option>
                </select>
                <select name="" id="area" @change="getPostCode" v-model="addressInfo.area">
                  <option value="">- - 请选择地区 - -</option>
                  <option :value="item.area" v-for="(item,index) of areas" :key="index">{{item.area}}</option>
                </select>
                <a href="javascript:;" class="icon icon-error" v-if="checkMsg.addrMsg!==''"></a>
                <div class="hint error">{{checkMsg.addrMsg}}</div>
              </div>
            </div>
            <div class="input-box3">
              <div class="input-u">
                <select name="" id="email" @change="getArea" v-model="addressInfo.postCode">
                  <option value="">- - 请选择邮编 - -</option>
                  <option :value="item.postcode" v-for="(item,index) of postcodes" :key="index">{{item.postcode}}</option>
                </select>
                <input type="text" v-model="addressInfo.email" placeholder="邮箱(选填)">
              </div>
            </div>
            <div class="input-box2">
              <div class="input-u">
                <textarea type="text" placeholder="详细地址" class="default" v-model="addressInfo.detailedAddr" @blur="checkDetailAddr" :class="checkMsg.detailedAddrMsg!=='' ? 'error' : ''"></textarea>
                <div class="hint error">{{checkMsg.detailedAddrMsg}}</div>
              </div>
            </div>
            <div class="submit-box">
              <a href="javascript:;" class="btn-sure btn" @click="saveAddrInfo">保存</a>
              <a href="javascript:;" class="btn-cancel btn" @click="close">取消</a>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import postCode from '../../lib/postcode'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      addressInfo: {
        name: '', // 姓名
        tel: '', // 电话
        city: '', // 市
        area: '', // 区
        street: '', // 街道
        detailedAddr: '', // 详细地址
        postCode: '',
        email: '',
        isSelect: false
      },
      checkMsg: { // 提示信息
        nameMsg: '',
        telMsg: '',
        addrMsg: '',
        detailedAddrMsg: '',
        postalCodeMsg: ''
      },
      editORadd: true, // 编辑地址还是增加地址,
      citys: '',
      areas: '',
      postcodes: ''
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    checkName () { // 检查姓名
      if (this.addressInfo.name.trim().length < 2) {
        this.checkMsg.nameMsg = '收货人姓名不能小于2个字符'
      } else this.checkMsg.nameMsg = ''
    },
    checkTel () { // 检查电话
      if (this.addressInfo.tel === '') this.checkMsg.telMsg = '请填写手机号码'
      else this.checkMsg.telMsg = ''
    },
    checkAddr () { // 检查地址
      //
    },
    checkDetailAddr () { // 检查详细地址
      if (this.addressInfo.detailedAddr.trim().length < 5) {
        this.checkMsg.detailedAddrMsg = '街道地址不能小于5个字符'
      } else this.checkMsg.detailedAddrMsg = ''
    },
    checkPostalCode () { // 检查邮政编码
      // this.checkMsg.postalCodeMsg = '该项还没设计好'
    },
    saveAddrInfo () { // 保存地址信息
      this.checkName()
      this.checkTel()
      this.checkAddr()
      this.checkDetailAddr()
      this.checkPostalCode()
      if (this.checkMsg.nameMsg === '' && this.checkMsg.telMsg === '' && this.checkMsg.addrMsg === '' && this.checkMsg.detailedAddrMsg === '' && this.checkMsg.postalCodeMsg === '') {
        this.$emit('saveAddress', this.addressInfo, this.editORadd)
        this.$emit('close')
      }
    },
    getArea () {
      this.areas = postCode.get('฿', this.addressInfo.city, 'area')
    },
    getPostCode () {
      this.postcodes = this.areas.filter(item => {
        return item.area === this.addressInfo.area
      })[0].postcode
    }
  },
  props: ['editAddrInfo'],
  computed: {
    ...mapState(['siteInfo'])
  },
  async created () {
    if (this.editAddrInfo !== undefined) {
      this.addressInfo = this.editAddrInfo
      this.editORadd = true
    } else this.editORadd = false
    this.citys = await postCode.load('฿')
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/addAddress.scss"
</style>
