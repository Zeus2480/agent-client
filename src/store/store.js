import { createStore } from "vuex";

import boot from "./modules/boot";
export default createStore({
  state: {
    count: 0,
  },
  mutations: {},
  actions: {},
  modules: {
    boot,
  },
});
