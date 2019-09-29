import { Module } from "vuex";
import { RootState } from "./store";
import Vue, { VueConstructor } from "vue";

export const modalNamespace = "modal";
export const setState = "setState";

export const getIsActive = "getIsActive";
export const getComponent = "getComponent";
export const getProps = "getProps";

const EmptyModal = Vue.extend({ name: "EmptyModal", render: h => h("div") });

export interface ModalState {
  isActive: boolean;
  component: VueConstructor<Vue>;
  props: Record<string, any>;
}

export const modalModule: Module<ModalState, RootState> = {
  namespaced: true,
  state: {
    isActive: false,
    component: EmptyModal,
    props: {}
  },
  mutations: {
    [setState](state, newState: ModalState): void {
      if (newState.isActive === false) state.component = EmptyModal;
      Object.assign(state, newState);
    }
  },
  actions: {
    [setState]({ commit }, newState: ModalState): void {
      commit(setState, newState);
    }
  },
  getters: {
    [getIsActive](state): boolean {
      return state.isActive;
    },
    [getComponent](state): VueConstructor<Vue> | undefined {
      return state.component;
    },
    [getProps](state): Record<string, any> {
      return state.props;
    }
  }
};
