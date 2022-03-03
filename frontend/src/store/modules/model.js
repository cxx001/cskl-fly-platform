import { MODEL } from '../mutation-types'

// initial state
const state = {
  canvansRef: {},
  vueRef: {},
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

  setVueRef({ state, commit }, {key, ref}) {
    commit(MODEL.SET_VUEREF, {key, ref})
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

  [MODEL.SET_VUEREF](state, {key , ref}) {
    state.vueRef[key] = ref;
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