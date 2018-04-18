<template>
  <transition name="slide">
    <div class="cart">
  <header>
    <div class="cart-header">
    <div class="back" @click="back">
      <i class="cart-left-large material-icons"></i>
    </div>
    <h1 class="t-header-headline">Cart</h1>
    </div>
  </header>
  <section>
    <div id="empty-cart" class="empty-cart">
      <div class="message-icon"><span class="icon-goods c-txt-gray-dk"></span></div>
      <div class="message-title"><span>Empty Shopping Cart</span></div>
      <div class="message-desc c-txt-gray-dk"><span>Please add some items to your cart</span></div>
      <router-link tag="div" to="/goods">
        <div><a class="t-button continue-shopping-button c-txt-prim c-bdr-prim">Go Shopping!</a></div>
      </router-link>
    </div>
  </section>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      back() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .cart
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
  .cart-header
    background-color black
  .c-txt-gray-dk
    color: #75787b!important;
  .back
    position absolute
    top: 0
    left: 6px
    z-index: 50
    .cart-left-large:before
      content :'\e314'
    .cart-left-large
      display: block
      padding: 10px
      font-size: $font-size-large-x
      color: $color-theme

  .t-header-headline
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 1em;
    overflow: hidden;
    padding: 12px 0;
    margin: 0 auto;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    -webkit-font-smoothing: antialiased;
  #empty-cart
    line-height: normal;
    padding: 10%;
    text-align: center;
   .message-title
     font-size: $font-size-large-x1
   .message-desc
     font-size: $font-size-medium-x
     line-height: 22px;
     margin: 5px auto 0;
     min-width: 230px;
     width: 90%;
   .t-button
     min-height: 42px;
     background: #53a318;
     border: 0;
     color: #fff;
     display: inline-block;
     font-size: $font-size-large-x0
     font-weight: 600;
     line-height: 1.2;
     padding: 11px 16px;
     text-align: center;
     box-sizing: border-box;
     -webkit-font-smoothing: antialiased;
   .continue-shopping-button
     background: transparent;
     border: 1px solid;
     border-radius: 2px;
     font-size: $font-size-medium-x
     margin-top: 30px;
     max-width: 300px;
     width: 70%;
</style>
