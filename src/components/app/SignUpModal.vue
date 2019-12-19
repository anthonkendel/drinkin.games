<template>
  <d-modal>
    <form
      class="modal-card-body"
      @submit.prevent="onSubmit"
    >
      <d-input-field
        type="email"
        required
      >
        Email
      </d-input-field>
      <d-input-field
        type="password"
        required
      >
        Password
      </d-input-field>
      <d-input-field
        type="password"
        required
      >
        Repeat password
      </d-input-field>

      <div class="buttons">
        <d-button
          type="submit"
          color="primary"
        >
          Sign up
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
import { store } from '@/store';
import { close } from '@/logic/Modal';
import Vue from 'vue';

export default Vue.extend({
  name: 'SignUpModal',
  methods: {
    onClickClose(): void {
      close();
    },
    onSubmit(): void {
      store.state.isLoggedIn = true;
      this.onClickClose();
    }
  }
});
</script>