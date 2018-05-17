import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      sidebar: false,
      counter: 14,
      name: 'ok',
      entrep: 1,
      capt: 5,
      zone: 3,
      company: [
        '[id : 1, name : "entre1"]',
        '[id : 2, name : "entre2"]',
        '[id : 3, name : "entre3"]'
      ]
    },
    mutations: {
      toggleSidebar (state) {
        state.sidebar = !state.sidebar
      },
      decrementrep (state, entrep) {
        state.entrep += 1
      },
      decremcapt (state, entrep) {
        state.capt += 1
      },
      decremzone (state, entrep) {
        state.zone += 1
      },
      increm (state) {
        state.counter = state.counter + 1
      },
      decrem (state) {
        state.counter = state.counter - 1
      }
    },
    actions: {
      updatevalue ({commit}, counter) {
        commit('updatevalue', counter)
      }
    },
    getters: {
      getcounter: state => {
        return state.counter * 2
      },
      company: state => id => {
        return state.comapany.find(company => company._id === id)
      }
    }
  })
}
export default createStore
