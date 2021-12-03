import Vue from 'vue'
import Vuex from 'vuex'
import products from './products'
import suppliers from './suppliers'
import categories from './categories'
import order from './order'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    suppliers,
    categories,
    order
  }
})
