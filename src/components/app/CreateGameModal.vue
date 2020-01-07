<template>
  <d-modal>
    <form
      class="modal-card-body"
      @submit.prevent="onSubmit"
    >
      <pre>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rerum labore architecto necessitatibus maxime voluptatum maiores et, sed perferendis deserunt quam molestiae quisquam voluptas corrupti facere pariatur quibusdam magnam tempore?</pre>

      <div class="buttons">
        <d-button
          type="submit"
          color="primary"
        >
          Create
        </d-button>

        <d-button
          type="button"
          @click="onClickClose"
        >
          Cancel
        </d-button>
      </div>
    </form>
  </d-modal>
</template>

<script lang="ts">
import { close } from '@/logic/Modal';
import Vue from 'vue';

export default Vue.extend({
  name: 'CreateGameModal',
  methods: {
    onClickClose(): void {
      close();
    },
    onSubmit(): void {
      this.onClickClose();
    }
  }
});
</script>