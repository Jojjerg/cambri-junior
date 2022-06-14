import Vue from 'vue'
import Vuex from 'vuex'
import auth from '../warehouse/auth'
import lessons from '../warehouse/lessons'
import users from '../warehouse/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    lessons,
    users
  }
})
