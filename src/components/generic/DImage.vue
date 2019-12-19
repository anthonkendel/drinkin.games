<template>
  <figure
    class="image"
    :class="cssClass"
  >
    <slot />
  </figure>
</template>

<script lang="ts">
import { imageSizes } from './bulma';
import Vue from 'vue';

export default Vue.extend({
  name: 'DImage',
  inheritAttrs: false,
  props: {
    size: {
      type: String,
      default: undefined,
      validator(value: string) {
        return imageSizes.includes(value);
      },
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.size}x${this.size}`]: this.size !== undefined,
      };
    },
  }
});
</script>