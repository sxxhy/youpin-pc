<template>
  <div class="m-cart">
    <div class="content">
      <div class="secondary">
        <span>
          <a href="/">首页</a>
        </span>
        <span>
          <a href="#">购物车</a>
        </span>
      </div>
    </div>
    <div class="content" v-if="cart.length === 0">
      <div class="no-good-container">
        <div class="no-cart">
          <div class="img"></div>
          <p class="text">购物车还是空的</p>
        </div>
        <div class="btn-wrap">
          <a href="/" class="btn-gobuy">继续逛</a>
        </div>
      </div>
    </div>
    <div class="content" v-if="cart.length !== 0">
      <m-has-good/>
    </div>
    <div class="recommend-container">
      <div class="content">
        <div class="guess-like">
          <h2>猜您喜欢</h2>
          <div class="good-list clearfix">
            <m-guess-like v-for="(item,index) of goodsList" :pro-info="item" :key="index"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MGuessLike from './guessLike'
import MHasGood from './hasGood'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      goodsList: [{
        img: 'https://img.youpin.mi-img.com/goods/4ea30fd779f29632d86815df85625fd3.jpg',
        id: 1,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/goods/dd3a2d5b6aad69cefe02de02cd4d5d8e.jpg',
        id: 2,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/goods/80056ae26195e9bea495162f4c13564a.jpg',
        id: 3,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/goods/2a8e76e15aabdbb4d8cab07064255191.jpg',
        id: 4,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/goods/5988ead69bda7742abf6e6813e9445bd.jpg',
        id: 5,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/goods/809265b96e431318d860112a2824f27c.jpg',
        id: 6,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      },
      {
        img: 'https://img.youpin.mi-img.com/pic_square/102532_54b8e8267f64f8ebb33d180c17a17aaa.png',
        id: 7,
        name: '智能浴霸',
        title: '米家智能联动，支持小爱同学，进口直流无刷电机，8合1浴霸，开机即出热风，智能预约',
        money: '¥',
        price: '799'
      }]
    }
  },
  components: {
    MGuessLike,
    MHasGood
  },
  computed: {
    ...mapState(['cart'])
  }
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/index.scss"
</style>
