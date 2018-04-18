<template>
  <div class="search">
    <div class="search-header">
        <search-box></search-box>
        <a class="ls-search-back" @click="back">Cancel</a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import SearchBox from 'base/search-box/search-box'
// import {searchMixin} from 'common/js/mixin'
  export default {
    methods: {
      back() {
        this.$router.back()
        this.query = ''
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

  .search
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-white
    .search-header
      background: #53a318;
      color: #fff;
      position: relative;
      z-index: 50;
      padding: 8px 6px 8px 12px;
      display: -ms-flexbox;
      display: -webkit-box;
      display: flex;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      .ls-search-back
        color: $color-white
        padding: 10px 12px;
        line-height: 18px;
        font-size: 12px;
        font-weight: 600;
        cursor: pointer;
        display: block;
        text-transform: uppercase;
</style>
