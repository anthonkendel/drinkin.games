<template>
  <form class="modal-card" @submit.prevent.stop="onSubmitLogin">
    <header class="modal-card-head">
      <p class="modal-card-title">Login</p>
      <button
        class="delete"
        @click="onClickCloseModal"
        aria-label="close"
      ></button>
    </header>
    <section class="modal-card-body">
      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            v-model="email"
            class="input"
            type="email"
            placeholder="johndoe@example.xom"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input
            v-model="password"
            class="input"
            type="password"
            placeholder="123456789"
            required
          />
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Login</button>
      <button class="button">Cancel</button>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { modalService } from "@/services/modalService";
import { authService } from "@/services/authService";

export default Vue.extend({
  name: "LoginModal",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmitLogin(): void {
      console.log("LOGIN");
      authService.login(this.email, this.password);
      modalService.close();
    },
    onClickCloseModal(): void {
      modalService.close();
    }
  }
});
</script>
