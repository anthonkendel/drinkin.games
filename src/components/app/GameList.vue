<template>
  <div class="game-list">
    <ol>
      <li
        v-for="game in games"
        :key="game.id"
      >
        <a href.stop>{{ game.title }}</a>
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
      default: () => [
        {
          id: 1,
          title: 'Example 1',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: 2,
          title: 'Example 2',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: 3,
          title: 'Example 3',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: 4,
          title: 'Example 4',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        }
      ]
    }
  }
});
</script>

<style lang="scss" scoped>
.game-list {
  margin: 1.6em;
}
</style>