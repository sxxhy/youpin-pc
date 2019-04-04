<template>
  <div class="m-banner">
     <Carousel v-model="value" loop :radius-dot="false">
        <CarouselItem v-for="(item,index) of bannerList" :key="index">
            <div class="demo-carousel">
              <a href="#">
                <img :src="item.img">
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
      value: 0,
      bannerList: [{
        img: 'https://img.youpin.mi-img.com/youpinoper/5eacc9e7032b1f591bfdf7ec1ad53799.jpg?id=&w=1080&h=450',
        id: 1
      },
      {
        img: 'https://img.youpin.mi-img.com/youpinoper/5eacc9e7032b1f591bfdf7ec1ad53799.jpg?id=&w=1080&h=450',
        id: 2
      },
      {
        img: 'https://img.youpin.mi-img.com/youpinoper/5eacc9e7032b1f591bfdf7ec1ad53799.jpg?id=&w=1080&h=450',
        id: 3
      }]
    }
  }
}
</script>

<style scoped lang="sass">
.m-banner
  width: 859px;
  float: left;
  height: 100%;
  img
    height: 358px;
</style>
