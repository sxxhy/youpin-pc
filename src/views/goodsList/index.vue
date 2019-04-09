<template>
  <div class="m-goodsList">
    <div class="content">
      <div class="secondary-navigator">
        <span>
          <a href="/">首页</a>
        </span>
        <span>
          <a href="#">销量榜单</a>
        </span>
      </div>
      <m-type-goods v-for="(item,index) of goodsList" :key="index" :pro-info="item"/>
    </div>
  </div>
</template>

<script>
import MTypeGoods from './typeGoods'
export default {
  data () {
    return {
      goodsList: [{
        title: '销量榜单',
        id: 1,
        child: [{
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }]
      }, {
        title: '米粉热搜',
        id: 1,
        child: [{
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }, {
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }]
      }, {
        title: '品质生活',
        id: 1,
        child: [{
          img: 'http://img.youpin.mi-img.com/800_pic/100347_1hdjcs70ly5d3.png@base@tag=imgScale&h=350&w=350&et=1&eth=480&etw=480&etc=FFFFFF?t=webp',
          name: '橡儿天然软木碳化鼠标垫',
          title: '恒温舒适，碳化清香，耐污防水，耐弯折，大中小号尺寸可选',
          money: '¥',
          price: '9.9',
          tag: '直降'
        }]
      }]
    }
  },
  components: {
    MTypeGoods
  }
}
</script>

<style lang="sass" scoped>
.m-goodsList
  background: #f2f2f2;
  padding-bottom: 80px;
  .content
    .secondary-navigator
      padding-bottom: 15px;
      padding: 30px 0;
      width: 100%;
      display: block;
      float: none;
      background: transparent repeat 0 0 none;
      font-size: 13px;
      span
        a
          margin: 0 6px;
          cursor: pointer;
          color: #000;
      span:first-child
        &::after
          content: '>'
        a
          margin: 0 6px;
          cursor: pointer;
          color: #000;
      span:last-child
        a
          color: #999;
          cursor: default;
</style>
