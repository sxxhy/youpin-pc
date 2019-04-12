<template>
    <div class="m-modal">
      <div class="modal-confirm">
        <div class="modal-inner">
          <a href="javascript:;" class="icon" @click="close"></a>
          <div class="modal-info">
            <p class="info-tit">确定要删除吗？</p>
          </div>
          <div class="modal-control">
            <a href="javascript:;" class="btn" @click="sureDel">确定</a>
            <a href="javascript:;" class="btn" @click="noDel">取消</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      scroll: 0
    }
  },
  methods: {
    close () {
      this.eleScroll()
      this.$emit('close')
    },
    sureDel () {
      this.eleScroll()
      this.$emit('sureDelete')
      this.$emit('close')
    },
    noDel () {
      this.eleScroll()
      this.$emit('close')
    },
    eleScroll () {
      if (this.scroll - this.y > 0) {
        document.documentElement.scrollTop = this.y - 400
      }
    },
    scrollTop () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scroll = scrollTop
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollTop)
  },
  props: ['y']
}
</script>

<style scoped lang="sass">
@import "../../assets/scss/cart/modal.scss"
</style>
