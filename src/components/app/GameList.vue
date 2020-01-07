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
      default: () => [
        {
          id: '1000',
          title: 'Example 1',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: '2000',
          title: 'Example 2',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: '3000',
          title: 'Example 3',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        },
        {
          id: '4000',
          title: 'Example 4',
          details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias beatae natus est assumenda! Vero, in fuga quo, debitis voluptates dolorum dignissimos voluptatibus incidunt error nisi dolores labore ratione laudantium?'
        }
      ]
    }
  }
});
</script>
