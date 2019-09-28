import Vue from "vue";
import Vuex from "vuex";
import { modalModule, modalNamespace } from "./modalModule";

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [modalNamespace]: modalModule
  }
});
