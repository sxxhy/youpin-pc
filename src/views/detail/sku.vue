<template>
  <div class="m-sku">
    <div class="name clearfix">
      <div class="good-name fl">每晚长绒棉贡缎套件</div>
    </div>
    <div class="summary">丝般睡感，纹理细腻，柔润升级，放心安睡</div>
    <div class="card">
      <div class="price-line">
        <h5 class="sku-title">售价</h5>
        <div class="price">
          <span class="money">¥</span>
          <span class="value">429</span>
          <span class="original">¥499</span>
          <span class="tag">直降20元</span>
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
    <div class="address-line">
      <h5 class="sku-title">配送区域</h5>
      <div class="address"></div>
    </div>
    <div class="type-line">
      <div class="info">
        <div class="size clearfix">
          <h5 class="sku-title">{{proInfo.option1_name}}</h5>
          <div class="size-container">
            <div class="tag-item-onSaled" v-for="(item,index) of colorList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="size clearfix">
          <h5 class="sku-title">{{proInfo.option2_name}}</h5>
          <div class="size-container">
            <div class="tag-item-onSaled" v-for="(item,index) of sizeList" :key="index">{{item}}</div>
          </div>
        </div>
        <div class="size clearfix">
          <h5 class="sku-title">{{proInfo.option3_name}}</h5>
          <div class="size-container">
            <div class="tag-item-onSaled" v-for="(item,index) of setMealList" :key="index">{{item}}</div>
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
        <a href="javascript:;" class="btn-cart">加入购物车</a>
        <a href="javascript:;" class="btn-buy">立即购买</a>
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
import { resetArr } from '../../lib/util.js'
export default {
  data () {
    return {
      countValue: 1,
      proInfo: {
        id: 1,
        name: '每晚长绒棉贡缎套件',
        title: '丝般睡感，纹理细腻，柔润升级，放心安睡',
        price: '279',
        oldprice: '299',
        money: '￥',
        GoodsSpecs: [{
          img: '',
          name: '芥末绿',
          option1: '适用于1.2m床',
          option2: '低贱',
          price: ''
        }, {
          img: '',
          name: '芥末绿',
          option1: '适用于1.5m床',
          option2: '平庸',
          price: ''
        }, {
          img: '',
          name: '雅灰蓝',
          option1: '适用于1.2m床',
          option2: '尊贵',
          price: ''
        }, {
          img: '',
          name: '雅灰蓝',
          option1: '适用于1.5m床',
          option2: '平庸',
          price: ''
        }, {
          img: '',
          name: '雅灰蓝',
          option1: '适用于1.8m床',
          option2: '尊贵',
          price: ''
        }, {
          img: '',
          name: '杏仁色',
          option1: '适用于1.2m床',
          option2: '低贱',
          price: ''
        }, {
          img: '',
          name: '杏仁色',
          option1: '适用于1.5m床',
          option2: '平庸',
          price: ''
        }, {
          img: '',
          name: '卡蜜拉',
          option1: '适用于1.2m床',
          option2: '低贱',
          price: ''
        }, {
          img: '',
          name: '卡蜜拉',
          option1: '适用于1.5m床',
          option2: '平庸',
          price: ''
        }, {
          img: '',
          name: '卡蜜拉',
          option1: '适用于1.8m床',
          option2: '尊贵',
          price: ''
        }, {
          img: '',
          name: '蓝调',
          option1: '适用于1.2m床',
          option2: '低贱',
          price: ''
        }, {
          img: '',
          name: '蓝调',
          option1: '适用于1.5m床',
          option2: '平庸',
          price: ''
        }, {
          img: '',
          name: '蓝调',
          option1: '适用于1.8m床',
          option2: '尊贵',
          price: ''
        }],
        option1_name: '颜色',
        option2_name: '尺寸',
        option3_name: '套餐'
      },
      colorList: [], // 颜色
      sizeList: [], // 尺寸
      setMealList: [] // 套餐
    }
  },
  methods: {
    reduce () {
      if (this.countValue === 1) return
      this.countValue--
    },
    add () {
      this.countValue++
    },
    setValue () {
      if (!parseInt(this.countValue)) {
        this.countValue = 1
      }
      this.countValue = parseInt(this.countValue)
    }
  },
  created () {
    this.colorList = resetArr(this.proInfo.GoodsSpecs, 'name')
    this.sizeList = resetArr(this.proInfo.GoodsSpecs, 'option1')
    this.setMealList = resetArr(this.proInfo.GoodsSpecs, 'option2')
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
        display: inline-block;
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
