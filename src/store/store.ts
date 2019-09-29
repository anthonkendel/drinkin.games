import Vue from "vue";
import Vuex from "vuex";
import { modalModule, modalNamespace } from "./modalModule";
import { authModule, authNamespace } from "./authModue";

Vue.use(Vuex);

export interface RootState {}

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    [authNamespace]: authModule,
    [modalNamespace]: modalModule
  }
});
