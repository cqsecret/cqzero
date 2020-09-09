import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadingShow: true,
    genderShow: true,
    cartList: [],
    productsInfo: [
      {
        num: 2193014194,
        logo: require('assets/img/products/logo.png'),
        name: 'Air Max',
        surl: require('assets/img/products/shoes1.jpg'),
        price: 120,
        isFavorites: false,
        countNeed: 1
      },
      {
        num: 2193014195,
        logo: require('assets/img/products/logo.png'),
        name: 'Air Max',
        surl: require('assets/img/products/shoes2.jpg'),
        price: 150,
        isFavorites: false,
        countNeed: 1
      },
      {
        num: 2193014196,
        logo: require('assets/img/products/logo.png'),
        name: 'Air Max',
        surl: require('assets/img/products/shoes3.webp'),
        price: 140,
        isFavorites: false,
        countNeed: 1
      },
    ]
  },
  mutations: {
    addToCartList(state, num) {
      let theIndex = state.productsInfo.findIndex(item => item.num == num)
      state.cartList.push(state.productsInfo[theIndex]);
    },
    deleteCartList(state, num) {
      let theIndex = state.cartList.findIndex(item => item.num == num)
      state.cartList.splice(theIndex, 1)
    },
    proCollect(state, num) {
      let theIndex = state.productsInfo.findIndex(item => item.num == num)
      state.productsInfo[theIndex].isFavorites = true
    }
  },
  actions: {
  },
  modules: {
  }
})
