<template>
  <div class="m-hero">
    <div class="content">
      <ul class="list">
        <li class="item" v-for="(item,index) of heroList" :key="index">
          <div class="item-img">
            <img :src="item.img">
          </div>
          <p class="title">{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      heroList: [{
        title: '每日新品',
        img: 'https://img.youpin.mi-img.com/800_pic/ee79f87fbc33b4ebdf3ccb8878e5cdd8.png',
        id: 1
      },
      {
        title: '每日新品',
        img: 'https://img.youpin.mi-img.com/800_pic/ee79f87fbc33b4ebdf3ccb8878e5cdd8.png',
        id: 2
      },
      {
        title: '每日新品',
        img: 'https://img.youpin.mi-img.com/800_pic/ee79f87fbc33b4ebdf3ccb8878e5cdd8.png',
        id: 3
      },
      {
        title: '每日新品',
        img: 'https://img.youpin.mi-img.com/800_pic/ee79f87fbc33b4ebdf3ccb8878e5cdd8.png',
        id: 4
      },
      {
        title: '每日新品',
        img: 'https://img.youpin.mi-img.com/800_pic/ee79f87fbc33b4ebdf3ccb8878e5cdd8.png',
        id: 5
      }]
    }
  }
}
</script>

<style lang="sass" scoped>
.m-hero
  height: 189px;
  .content
    border-bottom: 1px solid rgb(231, 231, 231);
    padding-top: 30px;
    height: 100%;
    .list
      height: 148px;
      overflow: hidden;
      padding-bottom: 10px;
      .item
        float: left;
        width: 130px;
        margin-right: 107px;
        cursor: pointer;
        &:last-child
          margin-right: 0;
        .item-img
          width: 130px;
          height: 120px;
          overflow: hidden;
          padding: 25px 25px 15px;
          display: inline-block;
          img
            width: 80px;
            height: 80px;
        .title
          color: rgb(85, 86, 102);
          font-size: 14px;
          margin-top: 4px;
          width: 130px;
          text-align: center;
</style>
