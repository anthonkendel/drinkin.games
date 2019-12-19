<template>
  <div
    id="app"
  >
    <main>
      <router-view v-if="$store.state.isLoggedIn" />
      <start v-else />
    </main>
  </div>
</template>

<script lang="ts">
import Start from '@/views/Start.vue';
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
  components: { Start },
});
</script>

<style lang="scss" scoped>
#app {
  height: 100vh;
}
</style>
