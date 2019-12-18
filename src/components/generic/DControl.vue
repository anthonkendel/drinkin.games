<template>
  <div class="control">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

/**
 * https://bulma.io/documentation/form/general/#form-control
 * 
 * The Bulma control is a versatile block container meant to enhance single form controls.
 * Because it has the same height as the element that it wraps, it can only contain the following Bulma elements:
 * - input
 * - select
 * - button
 * - icon
 */
export default Vue.extend({
  name: 'DControl',
});
</script>