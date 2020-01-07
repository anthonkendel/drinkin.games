<template>
  <nav
    class="panel"
    :class="cssClass"
  >
    <p class="panel-heading">
      <!-- @slot Heading content -->
      <slot name="heading" />
    </p>

    <!-- @slot Start content -->
    <slot name="start" />

    <p
      v-if="$scopedSlots.tabs"
      class="panel-tabs"
    >
      <!-- @slot Tabs content -->
      <slot name="tabs" />
    </p>

    <!-- @slot End content -->
    <slot name="end" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
import { BASE_TYPES } from './BulmaConstants';
export default Vue.extend({
  name: 'DPanel',
  props: {
    color: {
      type: String,
      default: undefined,
      validator(value: string) {
        return BASE_TYPES.includes(value);
      },
    },
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.color}`]: this.color !== undefined,
      };
    },
  }
});
</script>