<template>
  <div>
    <ol>
      <li
        v-for="game in games"
        :key="game.id"
      >
        <router-link :to="{ name: 'Game', params: { gId: game.id }}">
          {{ game.title }}
        </router-link>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'GameList',
  props: {
    games: {
      type: Array,
      required: false,
      default: () => []
    }
  }
});
</script>
