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
          <d-button color="primary">
            Primary
          </d-button>
        </d-control>
      </div>
    </div>

    <hr>

    <d-input-field>
      Default
    </d-input-field>
    <d-input-field color="primary">
      Primary
    </d-input-field>

      
    <d-button @click="onClickOpenModal">
      Open modal
    </d-button>
  </div>
</template>

<script lang="ts">
import { open } from '@/logic/Modal';
import { DModal } from '@/components/generic';
import Vue from 'vue';

export default Vue.extend({
  name: 'Sandbox',
  methods: {
    onClickOpenModal(): void {
      open(DModal);
    },
  }
});
</script>