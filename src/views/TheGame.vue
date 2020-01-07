<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title">
          {{ game.title }}
        </h2>
        <div class="details">
          {{ game.instructions }}
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Game } from '../store';
export default Vue.extend({
  name: 'TheGame',
  props: {
    gId: {
      type: String,
      required: true,
      default: '-1'
    }
  },
  computed: {
    game(): Game | object {
      return this.$store.getters.game(this.gId) || {};
    }
  }
});
</script>

<style lang="scss" scoped>
.details {
  white-space: pre-line;
}
</style>