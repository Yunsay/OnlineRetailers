<template>
  <div class="nearby">
    <div class="nearby-list">
      <ul>
        <li class="item" v-for="(item, index) in nearbys">
          <div class="card">
            <div class="card-img">
              <img width="100%" height="212" v-lazy="item.image.src">
              <span class="card-rebate"> $49.99
              <i style="font-style:normal">REBATE</i>
              </span>
            </div>
            <div class="card-title" v-html="item.title.text"></div>
            <div class="card-off">50%OFF</div>
            <div class="card-Price">
              <s class="Present-price" v-if="show(index)" v-text="price1(index)"></s>
              <span class="Discount-price" v-html="price2(index)"></span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {Nearby} from 'api/nearby'
  import {ERR_OK} from 'api/config'
  export default {
    data() {
      return {
        nearbys: []
      }
    },
    created() {
      this._Nearby()
    },
    methods: {
      _Nearby() {
        Nearby().then((res) => {
          this.nearbys = res.cards
        })
      },
      price1(index) {
        let item = this.nearbys[index];
        if(item.rightOne && item.rightOne.price){
          return item.rightOne.price.offeredPrice.text ? item.rightOne.price.offeredPrice.text:''
        }else if(item.rightTwo && item.rightTwo.price) {
          if(item.rightTwo.price.offeredPrice && item.rightTwo.price.offeredPrice.text){
            return item.rightTwo.price.offeredPrice.text
          }else if(item.rightTwo.price.pricingMessage && item.rightTwo.price.pricingMessage.text){
            return item.rightTwo.price.pricingMessage.text
          }
        }
      },
      price2(index) {
        let item = this.nearbys[index];
        if(item.rightOne&&item.rightOne.price){
          return item.rightOne.price.originalPrice.text?item.rightOne.price.originalPrice.text:''
        }else if(item.rightTwo && item.rightTwo.price) {
          if(item.rightTwo.price.originalPrice && item.rightTwo.price.originalPrice.text){
            return item.rightTwo.price.originalPrice.text
          }else if(item.rightTwo.price.pricingMessage && item.rightTwo.price.pricingMessage.text){
            return item.rightTwo.price.pricingMessage.text
          }
        }
      },
      show(index) {
        let item = this.nearbys[index];
        if(item.rightOne && item.rightOne.price){
          return 1
        }else if(item.rightTwo && item.rightTwo.price) {
          if(item.rightTwo.price.offeredPrice && item.rightTwo.price.offeredPrice.text){
            return 1
          }else if(item.rightTwo.price.pricingMessage && item.rightTwo.price.pricingMessage.text){
            return 0
          }
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .item
    margin-bottom 10px
  .card
    position relative
    background-color $color-white
    transition: border-bottom .4s;
    border-bottom 1px solid #e6e7e8 !important;
  .card-title
    font-size: 15.5px;
    height: 20px;
    margin-left 5px
    color: #333!important
    display inline-block
    margin-bottom: 22px;
    max-height: 40px;
    line-height: 20px;
    margin-top: 8px;
    overflow: hidden;
    font-weight: 600;
  .card-off
    position: absolute;
    bottom: 3px;
    color: #c04f1d !important;
    font-size: 14px;
    font-weight: 700;
    margin-left 5px
  .card-Price
    min-height: 0;
    font-weight: 600;
    right 1px
    bottom 2px
    position: absolute;
    padding: 0;
    font-size: 18px;
    margin: 0;
    text-align: right;
    margin-right 5px
    .Present-price
      color: #75787b!important;
      font-size: 21px;
      font-weight: 400;
      text-decoration: line-through;
    .Discount-price
      font-size: 21px;
      color: #53a318;
  .card-img
    position relative
  .card-rebate
    height 30px
    line-height 30px
    position: absolute;
    bottom: 3px;
    left: 0;
    color: #fff;
    padding: 5px 8px;
    z-index: 1000;
    background-color: rgba(190,77,38,.8);

</style>
