
export const searchMixin = {
  data() {
    return {
      query: '',
      refreshDelay: 120
    }
  },
  methods: {
    onQueryChange(query) {
      // 处理带空格的情况
      this.query = query.trim()
    },
    blurInput() {
      this.$refs.searchBox.blur()
    },
    addQuery(query) {
      this.$refs.searchBox.setQuery(query)
    },
    saveSearch() {
      this.saveSearchHistory(this.query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}
