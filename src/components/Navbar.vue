<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <h1 class="title is-5">Drinkingames</h1>
      </a>

      <a
        role="button"
        class="navbar-burger"
        :class="cssClass"
        aria-label="menu"
        aria-expanded="false"
        @click="onClickNavbarBurger"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div class="navbar-menu" :class="cssClass">
      <div class="navbar-start">
        <a class="navbar-item">Home</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-white" @click="onClickSignUp">Sign up</a>
            <a class="button is-dark" @click="onClickLogin">Login</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import LoginModal from "@/components/LoginModal.vue";
import { modalService } from "@/services/modalService";
import Vue from "vue";

export default Vue.extend({
  name: "Navbar",
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    onClickNavbarBurger(): void {
      this.isActive = !this.isActive;
    },
    onClickSignUp(): void {
      console.log("SIGN UP");
    },
    onClickLogin(): void {
      modalService.open(LoginModal);
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        "is-active": this.isActive
      };
    }
  }
});
</script>
