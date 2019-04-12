<template>
  <div class="m-section">
    <div class="content clearfix">
      <div class="m-h-top clearfix">
        <h2 class="title">
          {{title}}
          <slot name="subtitle"/>
        </h2>
        <span class="more">
          <span>更多</span>
          <a href="#" class="icon"></a>
        </span>
      </div>
      <slot name="mHContainer"/>
    </div>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style lang="sass" scoped>
.m-section
  margin-top: 60px;
  .m-h-top
    position: relative;
    z-index: 99;
    margin-bottom: 20px;
    .title
      color: #333;
      font-size: 28px;
      font-weight: 400;
    .more
      position: absolute;
      right: 0;
      top: 6px;
      height: 30px;
      color: #999;
      cursor: pointer;
      &:hover
        color: #845f3f;
        a
          background-position: 0 -1084px;
      span
        position: relative;
        bottom: 9px;
        font-size: 14px;
      a
        height: 30px;
        width: 30px;
        background-position: 0 -1118px;
</style>
