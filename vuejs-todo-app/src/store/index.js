import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        title: "ToDo 1",
        done: false
      }
    ]
  },
  getters: {
    allItems: (state) => state.items,
  },
  actions: {
    addItem({commit}, item) {
      commit('add_item', item);
    }
  },
  mutations: {
    add_item(state, item) {
      state.items.push(item);
    }
  },
  modules: {
  }
})
