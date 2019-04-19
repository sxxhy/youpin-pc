<template>
  <div class="m-sku">
    <div class="name clearfix">
      <div class="good-name fl">{{proInfo.sitename}} {{specInfo.name}} {{specInfo.option1}} {{specInfo.option2}}</div>
    </div>
    <div class="summary">{{proInfo.title}}</div>
    <div class="card">
      <div class="price-line">
        <h5 class="sku-title">售价</h5>
        <div class="price">
          <span class="money">{{proInfo.money}}</span>
          <span class="value">{{hasGoods && !isFirstSelect ? specInfo.price : proInfo.price}}</span>
          <span class="original">{{proInfo.money}}{{proInfo.oldprice}}</span>
          <span class="tag" v-if="proInfo.promotion_name2">{{proInfo.promotion_name2}}</span>
        </div>
      </div>
      <div class="service-line">
        <h5 class="sku-title">服务</h5>
        <div class="service">
          <div class="service-item">
            <a href="javascript:;" class="icon"></a>
            <span class="service-text">满99包邮</span>
          </div>
          <div class="service-item">
            <a href="javascript:;" class="icon"></a>
            <span class="service-text">有品精选</span>
          </div>
          <div class="service-item">
            <a href="javascript:;" class="icon"></a>
            <span class="service-text">7天无理由</span>
          </div>
          <div class="service-item">
            <a href="javascript:;" class="icon"></a>
            <span class="service-text">由有品配送发货，江苏深睡纺织科技有限公司提供售后</span>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="address-line">
      <h5 class="sku-title">配送区域</h5>
      <div class="address"></div>
    </div>-->
    <div class="type-line">
      <div class="info">
        <div class="size clearfix" v-if="colorList[0]">
          <h5 class="sku-title">{{proInfo.option1_name}}</h5>
          <div class="size-container">
            <div :class="colorSelect === item ? 'tag-item-onSelected' : 'tag-item-onSaled'" v-for="(item,index) of colorList" :key="index" @click="sureColor(item)">{{item}}</div>
          </div>
        </div>
        <div class="size clearfix" v-if="sizeList[0]">
          <h5 class="sku-title">{{proInfo.option2_name}}</h5>
          <div class="size-container">
            <div :class="sizeSelect === item ? 'tag-item-onSelected' : 'tag-item-onSaled'" v-for="(item,index) of sizeList" :key="index" @click="sureSize(item)">{{item}}</div>
          </div>
        </div>
        <div class="size clearfix" v-if="setMealList[0]">
          <h5 class="sku-title">{{proInfo.option3_name}}</h5>
          <div class="size-container">
            <div :class="mealSelect === item ? 'tag-item-onSelected' : 'tag-item-onSaled'" v-for="(item,index) of setMealList" :key="index" @click="sureMeal(item)">{{item}}</div>
          </div>
        </div>
      </div>
      <div class="count-line">
        <h5 class="sku-title">数量</h5>
        <div class="count-container">
          <div :class="countValue === 1 ? 'minus-btn' : 'minus-btn-active'" @click="reduce">
            <a href="javascript:;" class="icon reduce-active"></a>
          </div>
          <input type="text" class="count-input" v-model="countValue" @input="setValue">
          <div class="minus-btn-active" @click="add">
            <a href="javascript:;" class="icon add-active"></a>
          </div>
        </div>
      </div>
    </div>
    <div class="btn-line">
      <div class="buy-btn">
        <a href="javascript:;" class="btn-cart" v-if="hasGoods" @click="addCart">加入购物车</a>
        <a href="javascript:;" class="btn-buy" v-if="hasGoods" @click="goCartBuy">立即购买</a>
        <a href="javascript:;" class="btn-stop" v-if="!hasGoods">已售停</a>
      </div>
      <div class="favor-btn">
        <a href="javascript:;" class="icon icon-collection"></a>
        <p>收藏</p>
      </div>
      <div class="service-btn favor-btn">
        <a href="javascript:;" class="icon icon-service"></a>
        <p>客服</p>
      </div>
    </div>
  </div>
</template>

<script>
import { resetArr, sureSelect } from '../../lib/util.js'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {
      countValue: 1,
      colorList: [], // 颜色
      sizeList: [], // 尺寸
      setMealList: [], // 套餐,
      colorSelect: '', // 颜色选择
      sizeSelect: '', // 尺寸选择
      mealSelect: '', // 套餐选择
      isFirstSelect: true, // 是否是第一次选择
      specInfo: '', // 规格数据
      hasGoods: true // 是否有货
    }
  },
  methods: {
    ...mapMutations(['setCartCount', 'setCart', 'setCartSave']),
    reduce () { // 减
      if (this.countValue === 1) return
      this.countValue--
    },
    add () { // 加
      this.countValue++
    },
    setValue () { // 值判断
      if (!parseInt(this.countValue)) {
        this.countValue = 1
      }
      this.countValue = parseInt(this.countValue)
    },
    select (arr, value, name1, name2, name3, num) { // 规格联动
      if (this.isFirstSelect) {
        this.isFirstSelect = false
        let obj = sureSelect({ arr: arr, value, name1: name1, name2: name2, name3: name3 })
        if (num === 1) {
          this.sizeSelect = obj.val1
          this.mealSelect = obj.val2
        }
        if (num === 2) {
          this.colorSelect = obj.val1
          this.mealSelect = obj.val2
        }
        if (num === 3) {
          this.colorSelect = obj.val1
          this.sizeSelect = obj.val2
        }
      }
    },
    getSpecDetail () {
      let arr = this.proInfo.GoodsSpecs.filter((item) => {
        return item.name === this.colorSelect && item.option1 === this.sizeSelect && item.option2 === this.mealSelect
      })
      if (arr.length > 0) {
        this.specInfo = arr[0]
        this.hasGoods = true
      } else {
        this.specInfo = { name: '', option1: '', option2: '', price: '' }
        this.hasGoods = false
      }
    },
    sureColor (value) { // 颜色
      this.colorSelect = value
      this.select(this.proInfo.GoodsSpecs, value, 'name', 'option1', 'option2', 1)
      this.getSpecDetail()
    },
    sureSize (value) { // 尺寸
      this.sizeSelect = value
      this.select(this.proInfo.GoodsSpecs, value, 'option1', 'name', 'option2', 2)
      this.getSpecDetail()
    },
    sureMeal (value) { // 套餐
      this.mealSelect = value
      this.select(this.proInfo.GoodsSpecs, value, 'option2', 'name', 'option1', 3)
      this.getSpecDetail()
    },
    addCart () { // 加入购物车
      if (this.specInfo === '') { // 如果未选择规格 提示
        return this.$toast.top('请选择规格')
      } else { // 判断是否已有该商品
        for (let i in this.cart) {
          if (this.cart[i].id === this.specInfo.id) { // 存在叠加数量
            this.cart[i].count += parseInt(this.countValue)
            this.setCartSave(this.cart) // 修改后进行保存
            this.setCartCount(this.cart)
            this.$toast.top('加入成功')
            return
          }
        }
      }
      this.setCart({ // 不存在添加信息
        name: this.proInfo.sitename,
        id: this.specInfo.id,
        color: this.specInfo.name,
        size: this.specInfo.option1,
        meal: this.specInfo.option2,
        img: this.specInfo.img,
        price: this.specInfo.price,
        count: this.countValue,
        money: this.proInfo.money,
        tid: this.proInfo.type[0].fatherid,
        cid: this.proInfo.id,
        parentName: this.proInfo.type[0].fathername,
        isSelect: true
      })
      this.setCartCount(this.cart)
      this.$toast.top('加入成功')
    },
    goCartBuy () {
      this.addCart()
      if (!this.specInfo) return
      this.$router.push('/cart')
    }
  },
  created () {
    //
  },
  props: ['proInfo'],
  watch: {
    'proInfo' () {
      this.colorList = resetArr(this.proInfo.GoodsSpecs, 'name')
      this.sizeList = resetArr(this.proInfo.GoodsSpecs, 'option1')
      this.setMealList = resetArr(this.proInfo.GoodsSpecs, 'option2')
    }
  },
  computed: {
    ...mapState(['cart', 'cartCount'])
  }
}
</script>

<style lang="sass" scoped>
.m-sku
  width: 561px;
  float: left;
  .name
    margin-bottom: 4px;
    .good-name
      vertical-align: middle;
      line-height: 26px;
      font-size: 20px;
      color: #333;
  .summary
    width: 84%;
    line-height: 18px;
    font-size: 12px;
    color: #999;
  .card
    margin-bottom: 26px;
    margin-top: 18px;
    padding: 10px;
    background-color: #f9f9f9;
    .price-line
      margin-top: 12px;
      margin-bottom: 12px;
      height: 37px;
      overflow: hidden;
      vertical-align: bottom;
      line-height: 40px;
      font-size: 30px;
      .price
        color: #c00000;
        line-height: 30px;
        overflow: hidden;
        .money
          margin-right: 3px;
          font-size: 14px;
          vertical-align: 0;
        .value
          font-size: 30px;
          vertical-align: 0;
        .original
          margin-left: 14px;
          font-size: 12px;
          vertical-align: 0;
          text-decoration: line-through;
          color: #ccc;
        .tag
          height: 20px;
          line-height: 20px;
          padding: 0 6px;
          margin-left: 8px;
          background-color: #c00000;
          color: #fff;
          font-size: 12px;
          vertical-align: 2px;
          border-radius: 2px;
          display: inline-block;

    .service-line
      margin-bottom: 12px;
      vertical-align: bottom;
      line-height: 24px;
      font-size: 24px;
      .service
        overflow: hidden;
        .service-item
          float: left;
          overflow: hidden;
          min-height: 24px;
          margin-right: 13px;
          line-height: 24px;
          font-size: 16px;
          .icon
            vertical-align: middle;
            width: 16px;
            height: 16px;
            background-position: 0 -215px;
          .service-text
            margin-left: 8px;
            line-height: 16px;
            vertical-align: middle;
  .address-line
    overflow: hidden;
    padding: 0 10px 26px;
    .sku-title
      line-height: 14px;
    .address
      font-size: 14px;
      float: left;
      line-height: 14px;
      margin-right: 10px;
      font-weight: 400;
  .type-line
    .info
      overflow: hidden;
      padding: 0px 0px 12px;
      .size
        margin-bottom: 14px;
        padding: 0 10px;
        .size-container
          margin-bottom: -14px;
          float: left;
          width: 473px;
          overflow: hidden;
          .tag-item-onSelected
            border: 1px solid #845f3f;
            float: left;
            margin-right: 14px;
            box-sizing: border-box;
            padding: 4px 20px;
            color: #845f3f;
            line-height: 22px;
            font-size: 14px;
            transition: all .5s cubic-bezier(0,1,.5,1);
            text-align: left;
            margin-bottom: 14px;
            user-select: none;
            &:hover
              cursor: pointer;
          .tag-item-onSaled
            border: 1px solid #d6d6d6;
            float: left;
            margin-right: 14px;
            box-sizing: border-box;
            padding: 4px 20px;
            color: #333;
            line-height: 22px;
            font-size: 14px;
            margin-bottom: 14px;
            transition: all .5s cubic-bezier(0,1,.5,1);
            text-align: left;
            user-select: none;
            &:hover
              cursor: pointer;
    .count-line
      overflow: hidden;
      margin-bottom: 40px;
      .sku-title
        float: left;
        line-height: 32px;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 12px;
        font-weight: 400;
        vertical-align: bottom;
      .count-container
        .minus-btn
          float: left;
          width: 34px;
          height: 30px;
          border: 1px solid #d6d6d6;
          line-height: 28px;
          text-align: center;
          color: #d6d6d6;
          &:hover
            cursor: not-allowed;
          &:hover a
            cursor: not-allowed;
          .icon
            width: 30px;
            height: 30px;
            &.reduce-active
              background-position: 0 -1390px;
            &.add-active
              background-position: 0 -914px;
        .count-input
          float: left;
          width: 60px;
          height: 30px;
          padding: 0;
          border: 1px solid #d6d6d6;
          border-left-width: 0;
          border-right-width: 0;
          text-align: center;
          font-weight: 700;
          font-size: 14px;
          color: #333;
          outline: none;
        .minus-btn-active
          float: left;
          width: 34px;
          height: 30px;
          border: 1px solid #d6d6d6;
          line-height: 28px;
          text-align: center;
          color: #d6d6d6;
          .icon
            width: 30px;
            height: 30px;
            &.add-active
              background-position: 0 -1050px;
            &.reduce-active
              background-position: 0 -1356px;
  .btn-line
    height: 52px;
    overflow: hidden;
    .buy-btn
      float: left;
      overflow: hidden;
      a
        margin-right: 15px;
        box-sizing: border-box;
        min-width: 167px;
        height: 52px;
        line-height: 50px;
        font-size: 20px;
        display: inline-block;
        border-radius: 2px;
        text-align: center;
        border: 1px solid #666;
        padding: 0 6px;
        transition: all .5s cubic-bezier(0,1,.5,1);
      .btn-cart
        color: #fff;
        background-color: #845f3f;
        border-color: #845f3f;
        &:hover
          color: #fff;
          background-color: #d1bfa6;
          border-color: #d1bfa6;
      .btn-buy
        color: #845f3f;
        border-color: #845f3f;
        &:hover
          color: #fff;
          background-color: #845f3f;
          border-color: #845f3f;
      .btn-stop
        opacity: .8!important;
        cursor: not-allowed!important;
        color: #845f3f;
        border-color: #845f3f;
    .favor-btn
      float: left;
      width: 50px;
      height: 50px;
      border: 1px solid #ccc;
      border-radius: 2px;
      color: #999;
      line-height: 12px;
      text-align: center;
      font-size: 12px;
      transition: all .5s cubic-bezier(0,1,.5,1);
      box-sizing: content-box;
      &:hover
        cursor: pointer;
        background-color: #845f3f;
        color: #fff;
        border-color: #845f3f;
        a.icon.icon-collection
          background-position: 0 -1696px;
        a.icon.icon-service
          background-position: 0 -1526px;
      a.icon
        line-height: 12px;
        width: 30px;
        height: 30px;
        &.icon-collection
          background-position: 0 -880px;
        &.icon-service
          background-position: 0 -1560px;
    .service-btn
      margin-left: 15px;
  .sku-title
    float: left;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    vertical-align: bottom;
    margin-right: 10px;
    width: 48px;
</style>
