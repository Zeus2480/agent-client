import BootService from "../../services/apiModules/boot";

const state = {
  user: null,
  appBoot: null,
};

const getters = {
  user: (state) => state.user,
  appBoot: (state) => state.appBoot,
};

const actions = {
  async appBoot({ commit }, payload) {
    const response = await BootService.appBoot(payload);
    console.log(response);
  },
};

const mutations = {
  setAppBoot(state, appBoot) {
    state.appBoot = appBoot;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
