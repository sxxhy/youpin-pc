<template>
  <div class="pro-item">
    <div class="img">
      <img :src="proInfo.img">
    </div>
    <p class="pro-info">{{proInfo.name}}</p>
    <p class="pro-desc">{{proInfo.title}}</p>
    <p class="pro-price">
      <span class="pro-unit">{{proInfo.money}}</span>
      <span class="price">{{proInfo.price}}</span>
    </p>
  </div>
</template>

<script>
export default {
  props: ['proInfo']
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/guessLike.scss"
</style>
