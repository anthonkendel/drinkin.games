<template>
  <div class="modal" :class="cssClass">
    <div class="modal-background"></div>
    <component :is="component" v-bind="props"></component>
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
  getComponent,
  setState,
  getProps
} from "@/store/modalModule";
import { modalService } from "@/services/modalService";

export default Vue.extend({
  name: "ModalWrapper",
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        "is-active": this.isActive
      };
    },
    component(): void {
      return this.$store.getters[`${modalNamespace}/${getComponent}`];
    },
    props(): Record<string, any> {
      return this.$store.getters[`${modalNamespace}/${getProps}`];
    },
    isActive(): boolean {
      return this.$store.getters[`${modalNamespace}/${getIsActive}`];
    }
  },
  methods: {
    onClickCloseModal(): void {
      modalService.close();
    }
  }
});
</script>
