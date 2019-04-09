<template>
  <div class="m-recommend">
    <div class="content clearfix">
      <div class="m-h-top clearfix">
        <h2 class="title">
          专属推荐
        </h2>
      </div>
      <div class="product-list clearfix">
        <product v-for="(item,index) of goodsList" :key="index" style="margin-left: 5px;" :good="item"/>
      </div>
    </div>
  </div>
</template>

<script>
import product from './product'
export default {
  data () {
    return {
      goodsList: [{
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 0,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }, {
        img: 'https://img.youpin.mi-img.com/800_pic/8dece658867f953d5635b4a62dce6346.png?t=webp',
        title: '丝般睡感，纹理细腻，柔润升级...',
        name: '每晚长绒棉贡缎套件',
        colorCount: 5,
        tag: '直降20元',
        money: '¥',
        price: '279'
      }]
    }
  },
  components: {
    product
  }
}
</script>

<style lang="sass" scoped>
.m-recommend
  margin-top: 60px;
  .m-h-top
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
    .title
      color: #333;
      font-size: 28px;
      font-weight: 400;
</style>
