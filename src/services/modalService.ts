import Vue, { VueConstructor } from "vue";
import store from "@/store/store";
import { modalNamespace, setComponent, setIsActive } from "@/store/modalModule";

export const modalService = {
  open(component: VueConstructor<Vue>): void {
    store.dispatch(`${modalNamespace}/${setComponent}`, component);
    store.dispatch(`${modalNamespace}/${setIsActive}`, true);
  },
  close(): void {
    store.dispatch(`${modalNamespace}/${setIsActive}`, false);
  }
};
