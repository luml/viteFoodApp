import Vuex from 'vuex';
import { v4 as uuidv4 } from 'uuid';

export default new Vuex.Store({
  state: {
    fooddata: [],
    cart: [],
  },
  getters: {
    totalPrice: state => {
      if (!state.cart.length) return 0
      return state.cart.reduce((ac, next) => ac + +next.combinedPrice, 0)
    },
    cartCount: state => {
      if (!state.cart.length) return 0
      return state.cart.reduce((ac, next) => ac + +next.count, 0)
    }
  },
  mutations: {
    updateFoodData: (state, data) => {
      state.fooddata = data
    },
    addToCart: (state, formOutput) => {
      formOutput.id = uuidv4()
      state.cart.push(formOutput)
    },
  },
  actions: {
    async getFoodData({ state, commit }) {
      if (state.fooddata.length) return
      try {
        await fetch('https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants', {
          headers: {
            'Content-type': 'application/json',
            'x-api-key': 'Ni9tok2QGz9xOSKsfBp6q87dnjS8zVmo5t45SGsp'
          }
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
          commit('updateFoodData', data)
        })
      } catch(err) {
        console.log(err)
      }
    }
  },
  modules: {},
})