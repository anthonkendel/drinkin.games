<template>
  <nav class="level">
    <div class="level-left">
      <div class="level-item">
        <router-link
          :to="{ name: 'Home'} "
          title="Home"
        >
          <d-image class="has-width-160 is-hidden-mobile">
            <img
              src="../../assets/LogoCover.png"
              alt="Drinkin.games"
            />
          </d-image>
          <d-image
            size="64"
            class=" is-hidden-tablet"
          >
            <img
              class="is-hidden-tablet"
              src="../../assets/LogoProfile.png"
              alt="Drinkin.games"
            />
          </d-image>
        </router-link>
      </div>
    </div>
    <!-- Right side -->
    <div class="level-right"></div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TopBar',
});
</script>