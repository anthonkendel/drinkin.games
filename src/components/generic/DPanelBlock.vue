<template>
  <a
    class="panel-block"
    v-bind="$attrs"
    :class="cssClass"
    v-on="$listeners"
  >
    <slot />
  </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DPanelBlock',
  inheritAttrs: false,
  props: {
    active: {
      type: Boolean,
      default: undefined,
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        'is-active': this.active,
      };
    },
  }
});
</script>