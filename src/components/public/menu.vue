<template>
  <div class="m-menu">
    <ul class="menu-list">
      <li class="menu-item" v-for="(item,index) of menuList" :key="index" @mouseenter="showMenu(index)" @mouseleave="closeMenu">
        <span>
          <a href="#">{{item.name1}}</a>
        </span>
        <span>
          <span> / </span>
          <a href="#">{{item.name2}}</a>
        </span>
      </li>
    </ul>
    <div class="menu-detail" v-show="isShow" @mouseenter="isShow=true" @mouseleave="isShow=false">
      <div class="detail-group" v-for="(item,index) of getMenu" :key="index">
        <p class="title">{{item.title}}</p>
        <ul class="detail-list">
          <li class="detail-item" v-for="(item,index) of item.child" :key="index">
            <img :src="item.img">
            <span>{{item.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      menuList: [
        {
          name1: '有品推荐',
          name2: '家用电器',
          child: [{
            title: '服装配饰',
            child: [{
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }]
          }, {
            title: '服装配饰',
            child: [{
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://img.youpin.mi-img.com/miio_album_pics/fb758355288b1ed31fea86d0aab3b9f9.png?_s=ks3',
              name: '销量榜单',
              id: 3
            }]
          }]
        },
        {
          name1: '有品推荐',
          name2: '家用电器',
          child: [{
            title: '服装配饰',
            child: [{
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 3
            }]
          }, {
            title: '服装配饰',
            child: [{
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 1
            }, {
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 2
            }, {
              img: 'https://shop.io.mi-img.com/app/shop/img?id=shop_988f6e0a59bb82f10391368db740148e.jpeg&w=480&h=480',
              name: '销量榜单',
              id: 3
            }]
          }]
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        },
        {
          name1: '有品推荐',
          name2: '家用电器'
        }
      ],
      menuIndex: 0,
      isShow: false
    }
  },
  computed: {
    getMenu () {
      return this.menuList.filter((item, index) => {
        return index === this.menuIndex
      })[0].child
    }
  },
  methods: {
    showMenu (index) {
      this.isShow = true
      this.menuIndex = index
    },
    closeMenu () {
      let self = this
      self.isShow = false
    }
  }
}
</script>
<style lang="sass" scoped>
.m-menu
  position: relative;
  height: 358px;
  background-color: #845f3f;
  padding: 10px 0;
  width: 221px;
  float: left;
  z-index: 2;
  .menu-list
    overflow: hidden;
    .menu-item
      width: 100%;
      padding: 0 30px;
      height: 37px;
      line-height: 37px;
      color: #fff;
      font-size: 14px;
      transition: all .2s ease;
      text-align: left;
      overflow: hidden;
      float: left;
      cursor: pointer;
      &:hover
        background-color: #684b34;
        color: #f1ede9;
      a
        color: #fff;
        &:hover
          color: #e4af82;
  .menu-detail
    position: absolute;
    top: 0;
    left: 221px;
    width: 859px;
    height: 358px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 20px 30px;
    overflow-y: auto;
    transition: opacity 2s ease;
    .detail-group
      overflow: hidden;
      margin-bottom: 15px;
      .title
        color: #333;
        font-size: 14px;
      .detail-list
        overflow: hidden;
        .detail-item
          float: left;
          margin-bottom: 30px;
          width: 195px;
          height: 40px;
          line-height: 40px;
          cursor: pointer;
          img
            width: 40px;
            height: 40px;
            margin-right: 10px;
            vertical-align: middle;
            border: none;
          span
            font-size: 14px;
            color: #666;
            transition: color .2s ease;
            &:hover
              color: #845f3f;
</style>
