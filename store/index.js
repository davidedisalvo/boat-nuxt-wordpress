import Config from '~/assets/config.js'

export const strict = false

export const state = () => ({
  homePage: [],
  boat: [],
  menu: [],
  privacy: [],
  contact: [],
  window: 320,
  connection: null,
  navOpen: false,
  current: null,
  modalOpen: false,
  menuScrolled: false,
  menuScrolledDone: false
})

export const mutations = {
  resetMenus (state) {
    state.modalOpen = false
    state.navOpen = false
  },
  hideMenuBg (state) {
    state.menuScrolled = false
    state.menuScrolledDone = false
  },
  showMenuBg (state) {
    state.menuScrolled = true
  },
  showMenuBgDone (state) {
    state.menuScrolledDone = true
  },
  openMenu (state) {
    if (process.browser) {
      state.navOpen = true
      state.modalOpen = true
      let body = document.querySelector('body')
      if (body) {
        body.style.overflow = 'hidden'
      }
    }
  },
  setHomepage (state, obj) {
    state.homePage = obj
  },
  setBoat (state, obj) {
    state.boat = obj
  },
  setMenu(state, obj) {
    state.menu = obj
  },

  setPrivacy(state, obj) {
    state.privacy = obj
  },

  setContact (state, obj) {
    state.contact = obj
  },
  windowResize (state, size) {
    state.window = size
  },
  setConnection (state, type) {
    state.connection = type
  }
}
export const actions = {
  // we need to set timeouts to both states for the delay to kick in
  async showMenu ({ commit }) {
    await setTimeout(() => {
      commit('showMenuBg')
    }, 200)
    await setTimeout(() => {
      commit('showMenuBgDone')
    }, 600)
  },
  resetScroll ({ commit }) {
    if (process.browser) {
      let body = document.querySelector('body')
      if (body) {
        body.style.overflow = 'auto'
      }
    }
    commit('resetMenus')
  }
}