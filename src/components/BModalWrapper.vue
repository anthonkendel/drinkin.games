<template>
  <div class="modal" :class="cssClass">
    <div class="modal-background"></div>
    <component :is="component"></component>
    <button
      class="modal-close"
      aria-label="close"
      @click="onClickCloseModal"
    ></button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  modalNamespace,
  getIsActive,
  setIsActive,
  getComponent
} from "../store/modalModule";

export default Vue.extend({
  name: "BModalWrapper",
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        "is-active": this.isActive
      };
    },
    component(): void {
      return this.$store.getters[`${modalNamespace}/${getComponent}`];
    },
    isActive: {
      get() {
        return this.$store.getters[`${modalNamespace}/${getIsActive}`];
      },
      set() {
        this.$store.dispatch(
          `${modalNamespace}/${setIsActive}`,
          !this.isActive
        );
      }
    }
  },
  methods: {
    onClickCloseModal(): void {
      this.isActive = false;
    }
  }
});
</script>
