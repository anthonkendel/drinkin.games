<template>
  <d-modal>
    <form
      class="modal-card-body"
      @submit.prevent="onSubmit"
    >
      <d-input-field v-model="title">
        Title
      </d-input-field>

      <d-input-field
        v-model="instructions"
        element="textarea"
        rows="6"
      >
        Instructions
      </d-input-field>



      <div class="buttons">
        <d-button
          type="submit"
          color="primary"
        >
          Create game
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
import * as faker from 'faker';
import { store, Game } from '@/store';

export default Vue.extend({
  name: 'CreateGameModal',
  data() {
    return {
      title: '',
      instructions: '',
    };
  },
  methods: {
    onClickClose(): void {
      close();
    },
    onSubmit(): void {
      store.commit('createGame', new Game(faker.random.uuid(), this.title, this.instructions));
      this.onClickClose();
    }
  }
});
</script>