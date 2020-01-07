<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-6-tablet is-12-mobile">
            <h2 class="title is-4">
              Top games
            </h2>
            <game-list />
          </div>

          <div class="column is-6-tablet is-12-mobile">
            <h2 class="title is-4">
              New games
            </h2>
            <game-list />
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-8-tablet is-12-mobile">
            <h2 class="title is-4">
              My profile
            </h2>

            <profile-list />
          </div>

          <div class="column is-4-tablet is-12-mobile">
            <h2 class="title is-5">
              Your games
            </h2>
            <game-list />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import GameList from '@/components/app/GameList.vue';
import ProfileList from '@/components/app/ProfileList.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'Home',
  components: { GameList, ProfileList },
}); 
</script>