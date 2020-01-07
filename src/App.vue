<template>
  <div
    id="app"
  >
    <main>
      <template v-if="$store.state.isLoggedIn">
        <the-top-bar />
        <router-view />
      </template>
      <the-start v-else />
    </main>
  </div>
</template>

<script lang="ts">
import TheTopBar from '@/components/app/TheTopBar.vue';
import TheStart from '@/views/TheStart.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { TheStart, TheTopBar },
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
