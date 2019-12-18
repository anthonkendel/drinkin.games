<template>
  <div
    id="app"
    class="container"
  >
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',
});
</script>
