import store from "@/store/store";
import { authNamespace, setState } from "@/store/authModue";

export const authService = {
  login(email: string, password: string): void {
    store.dispatch(`${authNamespace}/${setState}`, {
      isLoggedIn: true
    });
  }
};
