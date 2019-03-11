import Vue from 'vue'
import Vuex from 'vuex'
import Router from './router'
import Axios from 'axios'
import router from './router';

Vue.use(Vuex)

let _api = Axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/danielfasula',
  timeout: 3000
})

export default new Vuex.Store({
  state: {
    bugs: [],
    notes: [],
  },
  mutations: {
    setBugs(state, bugs) {
      state.bugs = bugs
    },
    setNote(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    getBugs({ commit }) {
      _api.get('bugs')
        .then(res => {
          console.log(res.data)
        commit('setBugs', res.data.results)
        })
      .catch(e => {console.error(e)})
    },
    postBug({ commit, dispatch }, payload) {
      _api.post('bugs', payload)
        .then(res => {
          dispatch('getBugs')
        })
    },
    checkBug({ commit }, payload) {
      _api.post('bugDetails', payload)
        .then(res => {
        console.log(res)
      })
    },
    postNote({ commit }, payload) {
      _api.post(`/bugs/${payload.bugId}/notes`, payload)
        .then(res => {
          console.log(res)
          commit('setNote')
      })
    },
    viewNote({ dispatch }, payload) {
      _api.get(`/bugs/${payload.bugId}/notes`, payload)
        .then(res => {
          console.log(res)
          dispatch('viewNote')
      })
    }
  }
})
