<template>
  <div class="m-crowdfounding">
    <div class="good-item" v-for="(item,index) of getCrowList" :key="index" :class="index===0 ? 'good-item-big' : ''">
      <div class="item-inner">
        <img :src="item.img">
        <div class="pro-text">
          <p class="pro-info">{{item.name}}</p>
          <p class="pro-desc" v-if="index===0">{{item.title}}</p>
          <p class="pro-price">
            <span class="tag">{{item.money}}</span>
            <span>{{item.price}}</span>
          </p>
        </div>
      </div>
      <m-progress :support="item.support"/>
    </div>
  </div>
</template>

<script>
import MProgress from '../../components/public/progress'
export default {
  data () {
    return {
      crowList: [{
        img: 'https://img.youpin.mi-img.com/800_pic/430c420615342446a90d4f03feaf9b03.png',
        name: '佳尼特智能净水器 550G',
        title: '550加仑大通量，1.6L/min出水量，3年长效RO膜，米家APP控制',
        money: '￥',
        price: '2499',
        support: 1008
      },
      {
        img: 'https://img.youpin.mi-img.com/800_pic/430c420615342446a90d4f03feaf9b03.png',
        name: '佳尼特智能净水器 550G',
        title: '550加仑大通量，1.6L/min出水量，3年长效RO膜，米家APP控制',
        money: '￥',
        price: '2499',
        support: 7155
      },
      {
        img: 'https://img.youpin.mi-img.com/800_pic/430c420615342446a90d4f03feaf9b03.png',
        name: '佳尼特智能净水器 550G',
        title: '550加仑大通量，1.6L/min出水量，3年长效RO膜，米家APP控制',
        money: '￥',
        price: '2499',
        support: 7622
      }]
    }
  },
  computed: {
    getCrowList () {
      return this.crowList.slice(0, 3)
    }
  },
  components: {
    MProgress
  },
  created () {
    console.log(this.index)
  },
  props: ['index']
}
</script>

<style lang="sass" scoped>
.m-crowdfounding
  .good-item
    float: left;
    width: 266px;
    margin-left: 5px;
    cursor: pointer;
    .item-inner
      position: relative;
      width: 266px;
      height: 210px;
      background-color: rgb(248, 248, 248);
      img
        margin-top: 0px;
        position: absolute;
        right: 15px;
        bottom: 10px;
        width: 130px;
        height: 130px;
        z-index: 4;
      .pro-text
        position: relative;
        z-index: 6;
        padding-top: 25px;
        padding-left: 15px;
        .pro-info
          color: #333;
          margin-top: 0;
          font-size: 20px;
          line-height: 24px;
          height: 24px;
        .pro-desc
          color: #999;
          font-size: 16px;
          line-height: 20px;
          height: 20px;
          margin-top: 13px;
        .pro-price
          font-size: 20px;
          line-height: 24px;
          height: 24px;
          overflow: hidden;
          color: #a92112;
          margin-top: 11px;
          .tag
            font-size: 11px;
            vertical-align: top;
            margin-right: 5px;
  .good-item-big
    width: 537px;
    margin-left: 0;
    .item-inner
      position: relative;
      width: 537px;
      height: 210px;
      background: #f3f0e9;
      img
        margin-top: 0px;
        position: absolute;
        right: 15px;
        bottom: 10px;
        width: 215px;
        height: 215px;
        z-index: 4;
      .pro-text
        position: relative;
        z-index: 6;
        padding-top: 25px;
        padding-left: 23px;
        .pro-info
          color: #333;
          margin-top: 0;
          font-size: 20px;
          line-height: 24px;
          height: 24px;
          width: 50%;
        .pro-desc
          color: #999;
          font-size: 16px;
          line-height: 20px;
          height: 20px;
          margin-top: 8px;
          width: 50%;
        .pro-price
          font-size: 24px;
          line-height: 28px;
          height: 28px;
          overflow: hidden;
          color: #a92112;
          margin-top: 16px;
          .tag
            font-size: 15px;
            vertical-align: top;
            margin-right: 7px;
</style>
