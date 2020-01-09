<template>
  <div>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-5-tablet is-12-mobile">
            <h2 class="title is-4">
              Top games
            </h2>
            <game-list :games="$store.getters.topGames" />
          </div>

          <div class="column is-5-tablet is-12-mobile">
            <h2 class="title is-4">
              New games
            </h2>
            <game-list :games="$store.getters.newGames" />
          </div>

          <div class="column is-2-tablet is-12-mobile">
            <h2 class="title is-4">
              Actions
            </h2>
            <div class="buttons">
              <d-button
                color="primary"
                @click="onClickCreateGame"
              >
                Create game
              </d-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-12-mobile">
            <h2 class="title is-4">
              My profile
            </h2>

            <div class="columns">
              <div class="column is-8-tablet is-12-mobile">
                <profile-list />
              </div>

              <div class="column is-4-tablet is-12-mobile">
                <h2 class="title is-5">
                  Your games
                </h2>
                <game-list :games="$store.state.games" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import GameList from '@/components/app/GameList.vue';
import ProfileList from '@/components/app/ProfileList.vue';
import CreateGameModal from '@/components/app/CreateGameModal.vue';
import Vue from 'vue';
import { open } from '@/logic/Modal';

export default Vue.extend({
  name: 'TheHome',
  components: { GameList, ProfileList },
  methods: {
    onClickCreateGame(): void {
      open(CreateGameModal);
    },
  }
}); 
</script>