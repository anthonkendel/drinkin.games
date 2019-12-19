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
import { TYPES } from './BulmaConstants';
import Vue from 'vue';

export default Vue.extend({
  name: 'DButton',
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: undefined,
      validator(value: string) {
        return TYPES.includes(value);
      },
    },
    fullwidth: {
      type: Boolean,
      default: undefined,
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.color}`]: this.color !== undefined,
        'is-fullwidth': this.fullwidth,
      };
    },
  }
});
</script>