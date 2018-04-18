<template>
  <div class="m-header" v-show="isShow">
    <span class="ls-menu-trigger material-icons"></span>
    <router-link tag="div" to="/search" class="search-box-wrap">
      <search-box></search-box>
    </router-link>
    <router-link tag="div" to="/cart">
      <i class="cart material-icons ls-h-cart"></i>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from 'base/search-box/search-box'
  export default {
    data() {
      return {
        isShow: true
      }
    },
    watch:{
      $route (now, old){     //监控路由变换，控制m-header的显示
        if(now.path == "/search"){
          this.isShow=false;
        } else{
          this.isShow=true;
        }
      }
    },
    components: {
      SearchBox
    }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
  .m-header
    background: #53a318;
    color: $color-white
    position: relative;
    z-index: 50;
    padding: 8px 12px 8px 44px;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    box-sizing: border-box;
    .ls-menu-trigger
      font-size: 20px;
      top: 18px;
      position: absolute;
      left: 12px;
      color: $color-white
    .search-box-wrap
      width 100%
      padding-right 34px !important
    .cart
      color: #fff;
      padding: 6px 0 0 15px
      position: absolute;
      right 6px
      margin-right: 2px;
      font-size: 28px;
    .ls-menu-trigger:before
      content: "\E8fe";
    .cart:before
      content: "\E8CC";
      .ls-h-cart
        margin-right: 2px;
        font-size: 24px;
        color: $color-white
        padding: 4px 0 0 14px;
        position: relative;
</style>
