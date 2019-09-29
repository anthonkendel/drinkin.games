import { Module } from "vuex";
import { RootState } from "./store";

export const authNamespace = "auth";
export const setState = "setState";

export interface AuthState {
  isLoggedIn: boolean;
}

export const authModule: Module<AuthState, RootState> = {
  namespaced: true,
  state: {
    isLoggedIn: false
  },
  mutations: {
    [setState](state, newState: AuthState): void {
      Object.assign(state, newState);
    }
  },
  actions: {
    [setState]({ commit }, newState: AuthState): void {
      commit(setState, newState);
    }
  },
  getters: {}
};
