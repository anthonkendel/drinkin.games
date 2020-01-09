<template>
  <div class="field">
    <label
      :for="$attrs.id"
      class="label"
    >
      <slot />
    </label>
    <d-control>
      <template v-if="element === 'input'">
        <input
          class="input"
          v-bind="$attrs"
          :class="cssClass"
          v-on="listeners"
        >
      </template>
      
      <template v-if="element === 'textarea'">
        <textarea
          class="textarea"
          v-bind="$attrs"
          :class="cssClass"
          v-on="listeners"
        ></textarea>
      </template>
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
      validator(value: string): boolean {
        return TYPES.includes(value);
      },
    },
    size: {
      type: String,
      default: undefined,
      validator(value: string) {
        return SIZES.includes(value);
      },
    },
    element: {
      type: String,
      default: 'input',
      validator(value: string): boolean {
        return ['input', 'textarea'].includes(value);
      }
    }
  },
  computed: {
    cssClass(): Record<string, boolean> {
      return {
        [`is-${this.color}`]: this.color !== undefined,
        [`is-${this.size}`]: this.size !== undefined,
      };
    },
    listeners(): Record<string, Function | Function[]> {
      return {
        ...this.$listeners,
        input: (event: Event) => {
          if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
            this.$emit('input', event.target.value);
          }
        }
      };
    }

  }
});
</script>