import { MODEL } from '../mutation-types'

// initial state
const state = {
  canvansRef: {},
  butterflyRef: {},
  attrForm: {
    default: {
      id: null,
      name: "",
      isEntity: false,
      entityId: undefined,
    }
  },
}

// getters
const getters = {
}

// actions
const actions = {
  setCanvansRef({ state, commit }, canvansRef) {
    commit(MODEL.SET_CANVANSREF, canvansRef)
  },

  setButterflyRef({ state, commit }, butterflyRef) {
    commit(MODEL.SET_BUTTERFLY, butterflyRef)
  },

  setAttrForm({ state, commit }, { key, form }) {
    commit(MODEL.SET_ATTRFORM, { key, form });
  }
}

// mutations
const mutations = {
  [MODEL.SET_CANVANSREF](state, canvansRef) {
    state.canvansRef = canvansRef;
  },

  [MODEL.SET_BUTTERFLY](state, butterflyRef) {
    state.butterflyRef = butterflyRef;
  },

  [MODEL.SET_ATTRFORM](state, { key, form }) {
    state.attrForm[key] = state.attrForm[key] || {};
    for (const _ in form) {
      const element = form[_];
      state.attrForm[key][_] = element;
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}