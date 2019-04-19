<template>
  <div class="m-best fr">
    <h2 class="recommend-title">
      <span class="special-line"></span>
      相关推荐
      <span class="special-line"></span>
    </h2>
    <div class="best-product" v-for="(item,index) of recommendList" :key="index">
      <div class="img">
        <img :src="item.img">
      </div>
      <p class="title">{{item.title}}</p>
      <h5>{{item.name}}</h5>
      <h4>
        <span class="money">{{item.money}}</span>
        <span class="price">{{item.price}}</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      recommendList: [{
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/346ea74a0b4304fcc6fe5fa465b1f430.png',
        name: '每晚Polo针织套件',
        title: '纯棉材质，A面干爽，B面亲肤，冬夏皆宜',
        money: '￥',
        price: '299',
        id: 1
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.m-best
  wdith: 262px;
  .recommend-title
    text-align: center;
    color: #333;
    font-size: 16px;
    font-weight: 400;
    height: 42px;
    line-height: 42px;
    margin-bottom: 17px;
    .special-line
      margin: 0 12px;
      display: inline-block;
      width: 16px;
      border-top: 1px solid #333;
      height: 21px;
      vertical-align: bottom;
  .best-product
    border: 1px solid #f4f4f4;
    margin-bottom: 5px;
    transition: all .4s;
    overflow: hidden;
    cursor: pointer;
    .img
      padding: 22px 53px;
      width: 154px;
      height: 153px;
      text-align: center;
      background-color: #fff;
      overflow: hidden;
      img
        height: 154px;
        width: 154px;
        margin-top: -0.5px;
    .title,h5
      overflow: hidden;
      padding: 0 15px;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      text-align: center;
    .title
      margin-bottom: 10px;
      width: 230px;
      height: 38px;
      line-height: 38px;
      color: #845f3f;
    h5,h4
      font-weight: 400;
      background-color: #f4f4f4;
    h5
      height: 30px;
      line-height: 34px;
      color: #333;
    h4
      height: 24px;
      line-height: 20px;
      color: #c33300;
      text-align: center;
      .money
        font-size: 12px;
        vertical-align: top;
      .price
        font-size: 16px;
</style>
