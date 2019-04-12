<template>
  <div class="m-menu">
    <ul class="menu-list">
      <li class="menu-item" v-for="(item,index) of menuList" :key="index" @mouseenter="showMenu(index)" @mouseleave="closeMenu">
        <span>
          <a href="#">{{item[0].name}}</a>
        </span>
        <span>
          <span> / </span>
          <a href="#">{{item[1].name}}</a>
        </span>
      </li>
    </ul>
    <div class="menu-detail" v-show="isShow" @mouseenter="isShow=true" @mouseleave="isShow=false">
      <div class="detail-group" v-for="(item,index) of getMenu" :key="index">
        <p class="title">{{item.title}}</p>
        <ul class="detail-list">
          <li class="detail-item" v-for="(item1,index) of item.child" :key="index" @click="toDetail(item.firstId,item1.secondId)">
            <img :src="item1.img">
            <span>{{item1.name}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import { menuReset } from '../../lib/util'
export default {
  data () {
    return {
      menuList: [],
      menuIndex: 0,
      isShow: false
    }
  },
  computed: {
    ...mapState(['classInfo']),
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
    },
    toDetail (fid, sid) {
      this.$router.push(`/category/${fid}/${sid}`)
    }
  },
  created () {
    this.menuList = menuReset(this.classInfo)
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
