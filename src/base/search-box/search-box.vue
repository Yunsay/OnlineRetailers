<template>
  <div class="search-box">
    <i class="ls-search-wrap material-icons"></i>
    <input rel="query" v-model="query" class="box" :placeholder="placeholder"/>
    <i @click="clear" v-show="query" class="off-search material-icons"></i>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    placeholder: {
      type: String,
      default: 'Search Groupon'
    }
  },
  data() {
    return {
      query: ''
    }
  },
  methods: {
    clear() {
      this.query = ''
    },
    // setQuery(query) {
    //   this.query = query
    // },
    // blur() {
    //   this.$refs.query.blur()
    // }
  },
  // created() {
  //   this.$watch('query', debounce((newQuery) => {
  //     this.$emit('query', newQuery)
  //   }, 200))
  // }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    background: $color-white
    border-radius: 6px
    position : relative
    .ls-search-wrap
      color: green
      position: absolute;
      z-index: 10;
      line-height: 1em;
      top: 16px;
      left: 8px;
      width: 16px;
      height: 16px;
      margin: -7px 0 0;
    text-align: center;
    .ls-search-wrap:before
      content: "\E8b6";
    .off-search:before
      content: "\E888";
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      outline: none;
      border: none;
      padding: 5px 0 5px 0;
      text-indent: 22px
      font-size: $font-size-medium
      width: 100%;
      &::placeholder
        color: green
    .off-search
      position absolute
      right 8px
      top 11px
      font-size: 16px
      color: $color-dialog-background
</style>
