<template>
  <div class="tab">
    <router-link tag="div" class="tab-item" to="/featured">
      <span class="tab-link">Featured</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/nearby">
      <span class="tab-link">Nearby</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/goods">
      <span class="tab-link">Goods</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/getaways">
      <span class="tab-link">Getaways</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">export default {}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .tab
    display: flex
    height: 42px
    line-height: 42px
    font-size: $font-size-medium
    background-color #53a318
    .tab-item
      flex: 1
      text-align: center
      .tab-link
        width 100%
        color: $color-text-l
        display inline-block
        border-bottom: 2px solid #53a318
      &.router-link-active
        .tab-link
          color: $color-white
          border-bottom: 2px solid $color-white
</style>
