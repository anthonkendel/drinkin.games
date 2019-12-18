<template>
  <div>
    <h2 class="title is-4">
      Sandbox
    </h2>
    <div class="columns">
      <div class="column is-narrow">
        <d-control>
          <d-button>
            Default
          </d-button>
        </d-control>
      </div>

      <div class="column is-narrow">
        <d-control>
          <d-button type="primary">
            Primary
          </d-button>
        </d-control>
      </div>
    </div>

    <hr>

    <d-input-field>
      Default
    </d-input-field>
    <d-input-field type="primary">
      Primary
    </d-input-field>
  </div>
</template>

<script lang="ts">
import { DButton } from '@/components/generic';
import { DControl } from '@/components/generic';
import { DInputField } from '@/components/generic';

import Vue from 'vue';
export default Vue.extend({
  name: 'Sandbox',
  components: {
    DButton,
    DControl,
    DInputField
  },
});
</script>