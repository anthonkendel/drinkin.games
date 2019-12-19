<template>
  <div class="background">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-2-widescreen is-4-desktop is-6-tablet is-12-mobile">
          <div class="hero">
            <div class="hero-body">
              <d-image>
                <img
                  src="../assets/LogoWhiteMono.svg"
                  alt=""
                >
              </d-image>
            </div>
          </div>

          
          <div class="buttons is-centered">
            <d-button
              color="light"
              type="button"
            >
              Sign up
            </d-button>

            <d-button
              color="light"
              type="button"
            >
              Login
            </d-button>
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

<style lang="scss" scoped>
.background {
  height: 100vh;
  background: linear-gradient(150deg, #A92580, #F7BC00);
}
</style>