<template>
  <div
    id="app"
  >
    <main>
      <template v-if="$store.state.isLoggedIn">
        <top-bar />
        <router-view />
      </template>
      <start v-else />
    </main>
  </div>
</template>

<script lang="ts">
import TopBar from '@/components/app/TopBar.vue';
import Start from '@/views/Start.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { Start, TopBar },
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
