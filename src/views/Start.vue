<template>
  <div class="container">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-4">
          <div class="columns">
            <div class="column">
              <d-button type="primary">
                Login
              </d-button>
            </div>

            <div class="column">
              <d-button type="info">
                Sign up
              </d-button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Start',
});
</script>