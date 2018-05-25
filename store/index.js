import Company from '@/models/company.js'

const state = () => ({
  sidebar: false,
  counter: 14,
  name: [],
  water: [],
  entrep: 1,
  capt: 5,
  zone: 3,
  selectedComp: null,
  compan: []
})
const mutations = {
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
  },
  setCompanyList (state, list) {
    state.compan = list
  },
  selectComp (state, selectedComp) {
    state.selectedComp = 'nom'
  }
}
const actions = {
  updatevalue ({commit}, counter) {
    commit('updatevalue', counter)
  },
  async fetchAll ({commit}) {
    // let result = await back.fetch("/api/all")
    let result = [
      {id: 1, name: 'Entreprise-1-', water: 120},
      {id: 2, name: 'Entreprise-2-', water: 1000},
      {id: 2, name: 'Entreprise-3-', water: 300},
      {id: 2, name: 'Entreprise-4-', water: 700}
    ]
    commit('setCompanyList', result.map(res => {
      return new Company(res.id, res.name, res.water)
    }))
  },
  async addNew (info) {
    // await back.post("/api/new", new Company(info))
  }
}
const getters = {
  // filterCompById: state => (toBeDisplayed) => {
  //   return state.compan.filter(company => toBeDisplayed.includes(company.id))
  // },
  // filterCompByConsumption: state => (consumption) => {
  //   return state.compan.filter(company => company.water < consumption)
  // },
  getcounter: state => {
    return state.counter * 2
  },
  compa: (state) => (id) => {
    return state.compan
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}
