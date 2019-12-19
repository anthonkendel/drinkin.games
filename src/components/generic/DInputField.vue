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
import { TYPES, SIZES} from './BulmaConstants';
import Vue from 'vue';

export default Vue.extend({
  name: 'DInputField',
  components: { DControl },
  inheritAttrs: false,
  props: {
    color: {
      type: String,
      default: undefined,
      validator(value: string) {
        return TYPES.includes(value);
      },
    },
    size: {
      type: String,
      default: undefined,
      validator(value: string) {
        return SIZES.includes(value);
      },
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.color}`]: this.color !== undefined,
        [`is-${this.size}`]: this.size !== undefined,
      };
    },
  }
});
</script>