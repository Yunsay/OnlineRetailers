import Vue from 'vue'
import Router from 'vue-router'
// import Featured from 'components/featured/featured'
// import Search from 'components/search/search'
// import Cart from 'base/cart/cart'
Vue.use(Router)
const Featured = (resolve) => {
  import('components/featured/featured').then((module) => {
    resolve(module)
  })
}

const Search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const Cart = (resolve) => {
  import('base/cart/cart').then((module) => {
    resolve(module)
  })
}

const Nearby = (resolve) => {
  import('components/nearby/nearby').then((module) => {
    resolve(module)
  })
}
const Goods = (resolve) => {
  import('components/goods/goods').then((module) => {
    resolve(module)
  })
}
const Getaways = (resolve) => {
  import('components/getaways/getaways').then((module) => {
    resolve(module)
  })
}
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/featured'
    },
    {
      path: '/featured',
      component: Featured,
    },
    {
      path: '/nearby',
      component: Nearby,
    },
    {
      path: '/goods',
      component: Goods,
    },
    {
      path: '/getaways',
      component: Getaways,
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
