<template>
  <form class="modal-card">
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
          <input class="input" type="email" placeholder="johndoe@example.xom" />
        </div>
      </div>

      <div class="field">
        <label class="label">Password</label>
        <div class="control">
          <input class="input" type="password" placeholder="123456789" />
        </div>
      </div>
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import { modalService } from "@/services/modalService";

export default Vue.extend({
  name: "LoginModal",

  methods: {
    onClickCloseModal(): void {
      modalService.close();
    }
  }
});
</script>
