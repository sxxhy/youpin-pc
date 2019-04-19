<template>
    <div class="has-good-container">
      <div class="title">
        <a href="javascript:;" class="icon select-icon icon-check-active" :class="checkAll ? 'icon-check-active' : 'icon-check'" @click="chooseAll(checkAll)"></a>
        <span class="all-text">全选</span>
        <span class="product">商品信息</span>
        <span class="price">单价</span>
        <span class="num">数量</span>
        <span class="total">金额</span>
        <span class="edit">操作</span>
      </div>
      <div class="cart-gmerchant-list">
        <div v-for="(item1,index1) of goodsLists" :key="index1">
          <div v-if="item1.list.length>0">
            <div class="merchant">
              <a href="javascript:;" class="icon select-icon" :class="checkList(item1.list) ? 'icon-check-active' : 'icon-check'" @click="chooseList(item1.list, checkList(item1.list))"></a>
              <span class="name">{{item1.parentName}}</span>
              <div class="tip">
                <span @mouseenter="showFreight(index1)" @mouseleave="closeFreight(index1)">
                  <span class="postimg">!</span>
                  已免运费
                </span>
                <span class="layer hide" ref="freight">有品甄选商品，即有品配送和第三方商家发货的商品，2018年1月1日起，单笔订单满99元免运费，不满99元收10元运费。</span>
              </div>
            </div>
            <div>
            <div class="good-item">
              <div class="mrchant-top"></div>
              <div class="item-info clearfix" v-for="(item2,index2) of item1.list" :key="index2">
                <div class="select">
                  <a href="javascript:;" class="icon select-icon" :class="item2.isSelect ? 'icon-check-active' : 'icon-check'" @click="chooseItem(item2)"></a>
                </div>
                <div class="image">
                  <img :src="imgBaseURL + item2.img">
                </div>
                <div class="name">
                  <div class="vertical-wrap">
                    <p class="good-name">{{item2.name}} {{item2.color}} {{item2.size}} {{item2.meal}}</p>
                  </div>
                </div>
                <div class="price">
                  <span>{{item2.money}}{{item2.price}}</span>
                </div>
                <div class="num">
                  <div class="can-edit">
                    <div class="num-reduce-add">
                      <a href="javascript:;" class="icon" :class="item2.count === 1 ? 'icon-reduce' : 'icon-reduce-active'" @click="reduce(item2)"></a>
                      <span class="text">{{item2.count}}</span>
                      <a href="javascript:;" class="icon icon-add-active" @click="add(item2)"></a>
                    </div>
                  </div>
                </div>
                <div class="subtotal">
                  <span>{{item2.money}}{{item2.price * item2.count}}</span>
                </div>
                <div class="del">
                  <a href="javascript:;" class="icon" @click="showDelete(item1.list, index2, $event)"></a>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div class="cart-total" ref="total" :class="isfixed ? 'fixed-total-bottom' : ''">
        <div class="ico fl">
          <a href="javascript:;" class="icon select-icon" :class="checkAll ? 'icon-check-active' : 'icon-check'" @click="chooseAll(checkAll)"></a>
          <span class="select-text">全选</span>
          <span class="already-select">已选{{getTotalCount}}件</span>
        </div>
        <div class="total-price-con">
          <span class="total-after-prefer">
            <span>合计：</span>
            ￥{{getTotalPrice}}
          </span>
        </div>
        <span class="checkout fr" @click="goBuy">去结算</span>
      </div>
      <m-modal v-if="openDelete" @close="openDelete=false" @sureDelete="sureDelete($event)" :y="deleteElementY"/>
    </div>
</template>

<script>
import { resetArr, cartList } from '../../lib/util'
import MModal from './modal'
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      goodsLists: {}, // 筛选后的商品列表
      allBox: true, // 全选
      openDelete: false, // 删除界面,
      deleteList: [], // 要删除项所在的数组
      deleteIndex: -1, // 删除项的下标,
      deleteElementY: 0, // 记录当前点击删除元素的y抽坐标
      isfixed: false, // 是否定位总价
      totalScrollTop: 0 // 总价的位置
    }
  },
  created () {
    let arr = resetArr(this.cart, 'parentName')
    this.goodsLists = cartList(arr, this.cart, 'parentName')
  },
  methods: {
    ...mapMutations(['deleteCartItem', 'setCartSave', 'setCartCount']),
    chooseList (info, bool) { // 父类选择
      for (let item of info) {
        // item.isSelect = !bool
        for (let i in this.cart) {
          if (this.cart[i].id === item.id) {
            this.cart[i].isSelect = !bool
          }
        }
      }
      this.setCartSave(this.cart)
    },
    chooseItem (item2) { // 单个商品选择
      // item2.isSelect = !item2.isSelect
      for (let p of this.cart) {
        if (p.id === item2.id) {
          p.isSelect = !p.isSelect
        }
      }
      this.setCartSave(this.cart)
    },
    chooseAll (bool) { // 全选
      // for (let i in this.goodsLists) {
      //   for (let item of this.goodsLists[i].list) {
      //     item.isSelect = !bool
      //   }
      // }
      for (let item of this.cart) {
        item.isSelect = !bool
      }
      this.setCartSave(this.cart)
    },
    reduce (pro) {
      if (parseInt(pro.count) === 1) {
        return
      }
      pro.count--
      for (let item of this.cart) {
        if (item.id === pro.id) {
          item.count = pro.count
        }
      }
      this.setCartSave(this.cart)
      this.setCartCount(this.cart)
    },
    add (pro) {
      pro.count++
      for (let item of this.cart) {
        if (item.id === pro.id) {
          item.count = pro.count
        }
      }
      this.setCartSave(this.cart)
      this.setCartCount(this.cart)
    },
    showDelete (list, i, e) { // 删除界面
      this.deleteElementY = e.pageY
      this.deleteList = list
      this.deleteIndex = i
      this.openDelete = true
    },
    sureDelete () { // 确定删除时触发
      for (let i in this.cart) {
        if (this.cart[i].id === this.deleteList[this.deleteIndex].id) {
          this.cart.splice(i, 1)
        }
      }
      this.deleteCartItem(this.cart) // 删除后保存更新cart
      this.deleteList.splice(this.deleteIndex, 1)
      this.setCartCount(this.cart)
    },
    showFreight (index) { // 运费信息展示
      this.$refs.freight[index.substring(4)].className = 'layer'
    },
    closeFreight (index) { // 关闭运费信息
      this.$refs.freight[index.substring(4)].className = 'layer hide'
    },
    scrollTop () { // 监听滚动条
      var scroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      var innerHeight = window.innerHeight
      if (this.totalScrollTop - scroll > innerHeight) {
        this.isfixed = true
      }
      if (this.totalScrollTop - scroll < innerHeight) {
        this.isfixed = false
      }
    },
    goBuy () { // 结算
      let res = this.cart.some(item => {
        return item.isSelect === true
      })
      if (res) this.$router.push('/checkout')
    }
  },
  computed: {
    ...mapState(['cart']),
    checkList () { // 父级选择
      return function (info) {
        return info.every((item) => {
          return item.isSelect === true
        })
      }
    },
    checkAll () { // 全选
      // let a = []
      // for (let i in this.goodsLists) {
      /* a[i] = this.goodsLists[i].list.every((item) => {
          return item.isSelect === true
        })
        if (a[i] !== true) {
          return false
        } */
      return this.cart.every((item) => {
        return item.isSelect === true
      })
      // return true
    },
    getTotalPrice () { // 商品总价
      let totalPrice = 0
      for (let i in this.goodsLists) {
        for (let item of this.goodsLists[i].list) {
          if (item.isSelect === true) {
            totalPrice += item.count * item.price
          }
        }
      }
      return totalPrice
    },
    getTotalCount () { // 已选数量
      let count = 0
      for (let i in this.goodsLists) {
        for (let item of this.goodsLists[i].list) {
          if (item.isSelect === true) {
            count += item.count
          }
        }
      }
      return count
    }
  },
  components: {
    MModal
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
    this.totalScrollTop = this.$refs.total.offsetTop
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/hasGood.scss"
</style>
