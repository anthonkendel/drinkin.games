<template>
  <button
    class="button"
    v-bind="$attrs"
    :class="cssClass"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { types } from './bulma';
import Vue from 'vue';

export default Vue.extend({
  name: 'DButton',
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: undefined,
      validator(value: string) {
        return types.includes(value);
      },
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.type}`]: this.type !== undefined,
      };
    },
  }
});
</script>