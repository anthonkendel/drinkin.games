<template>
  <div
    class="modal is-active"
    @keyup.esc="onClickClose"
  >
    <div
      v-if="background"
      class="modal-background"
    />
    <div class="modal-content">
      <slot />
    </div>
    <button
      class="modal-close is-large"
      aria-label="close"
      @click="onClickClose"
    />
  </div>
</template>

<script lang="ts">
import { close } from '@/logic/Modal';
import Vue from 'vue';

export default Vue.extend({
  name: 'DModal',
  props: {
    background: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onClickClose(): void {
      close();
    }
  },
});
</script>