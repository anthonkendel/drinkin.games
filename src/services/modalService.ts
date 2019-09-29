import Vue, { VueConstructor } from "vue";
import store from "@/store/store";
import { modalNamespace, setState } from "@/store/modalModule";

export const modalService = {
  open(component: VueConstructor<Vue>, props: Record<string, any> = {}): void {
    store.dispatch(`${modalNamespace}/${setState}`, {
      component,
      props,
      isActive: true
    });
  },
  close(): void {
    store.dispatch(`${modalNamespace}/${setState}`, {
      isActive: false
    });
  }
};
