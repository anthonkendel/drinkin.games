<template>
  <div class="field">
    <label
      :for="$attrs.id"
      class="label"
    >
      <slot />
    </label>
    <d-control>
      <input
        class="input"
        v-bind="$attrs"
        :class="cssClass"
        v-on="$listeners"
      >
    </d-control>
  </div>
</template>

<script lang="ts">
import DControl from './DControl.vue';
import { types, sizes } from './bulma';
import Vue from 'vue';

export default Vue.extend({
  name: 'DInputField',
  components: { DControl },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: undefined,
      validator(value: string) {
        return types.includes(value);
      },
    },
    size: {
      type: String,
      default: undefined,
      validator(value: string) {
        return sizes.includes(value);
      },
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.type}`]: this.type !== undefined,
        [`is-${this.size}`]: this.size !== undefined,
      };
    },
  }
});
</script>