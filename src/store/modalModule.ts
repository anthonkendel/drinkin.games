import { Module } from "vuex";
import { RootState } from "./store";
import Vue, { VueConstructor } from "vue";

export const modalNamespace = "modal";
export const setIsActive = "setIsActive";
export const setComponent = "setComponent";
export const getIsActive = "getIsActive";
export const getComponent = "getComponent";

export interface ModalState {
  isActive: boolean;
  componentWrapper: { component?: VueConstructor<Vue> };
}

export const modalModule: Module<ModalState, RootState> = {
  namespaced: true,
  state: {
    isActive: false,
    componentWrapper: {}
  },
  mutations: {
    [setIsActive](state, isActive: boolean): void {
      if (isActive === false) {
        state.componentWrapper = {};
      }
      state.isActive = isActive;
    },
    [setComponent](state, component: VueConstructor<Vue>): void {
      state.componentWrapper = { component };
    }
  },
  actions: {
    [setIsActive]({ commit }, isActive: boolean): void {
      commit(setIsActive, isActive);
    },
    [setComponent]({ commit }, component: VueConstructor<Vue>): void {
      commit(setComponent, component);
    }
  },
  getters: {
    [getIsActive](state): boolean {
      return state.isActive;
    },
    [getComponent](state): VueConstructor<Vue> | undefined {
      return state.componentWrapper.component;
    }
  }
};
