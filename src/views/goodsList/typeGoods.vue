<template>
  <div class="m-typegoods">
    <h2>{{proInfo.title}}</h2>
    <div class="product-list clearfix">
      <m-pro-item v-for="(item,index) of proInfo.child" :key="index" :good-info="item"/>
    </div>
  </div>
</template>

<script>
import MProItem from './proitem'
export default {
  components: {
    MProItem
  },
  props: ['proInfo']
}
</script>

<style lang="sass" scoped>
.m-typegoods
  padding-top: 20px;
  margin-bottom: 20px;
  h2
    padding-bottom: 13px;
    font-weight: 400;
    font-size: 24px;
    color: #333;
</style>
