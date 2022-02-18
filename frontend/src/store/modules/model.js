import {MODEL} from '../mutation-types'

// initial state
const state = {
  canvansRef: {},
}

// getters
const getters = {
}

// actions
const actions = {
  setCanvansRef ({ state, commit }, canvansRef) {
    commit(MODEL.SET_CANVANSREF, canvansRef)
  }
}

// mutations
const mutations = {
  [MODEL.SET_CANVANSREF] (state, canvansRef) {
    state.canvansRef = canvansRef
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}