<template>
  <div class="m-banner">
     <Carousel v-model="value" loop :radius-dot="false">
        <CarouselItem v-for="(item,index) of bannerList" :key="index">
            <div class="demo-carousel">
              <a href="#">
                <img :src="imgBaseURL + item.head_img">
              </a>
            </div>
        </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0
    }
  },
  props: ['bannerList']
}
</script>

<style scoped lang="sass">
.m-banner
  width: 859px;
  float: left;
  height: 100%;
  img
    height: 358px;
.m-banner/deep/ .ivu-carousel-dots.ivu-carousel-dots-inside
  z-index: 1;
</style>
