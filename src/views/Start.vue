
<template>
  <div class="background">
    <section class="section">
      <div class="columns is-centered">
        <div class="column is-3-fullhd is-3-widescreen is-4-desktop is-6-tablet is-12-mobile">
          <div class="hero">
            <div class="hero-body">
              <d-image>
                <img
                  src="../assets/LogoWhiteMono.svg"
                  alt="Drinkin.games"
                />
              </d-image>
            </div>
          </div>

          <div class="buttons is-centered">
            <d-button
              color="light"
              type="button"
              @click="onClickSignUp"
            >
              Sign up
            </d-button>

            <d-button
              color="light"
              type="button"
              @click="onClickLogin"
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
import LoginModal from '@/components/app/LoginModal.vue';
import SignUpModal from '@/components/app/SignUpModal.vue';
import { open } from '@/logic/Modal';

export default Vue.extend({
  name: 'Start',
  methods: {
    onClickLogin(): void {
      open(LoginModal);
    },
    onClickSignUp(): void {
      open(SignUpModal);
    }
  }
});
</script>

<style lang="scss" scoped>
.background {
  height: 100vh;
  background: linear-gradient(150deg, #A92580, #F7BC00);
}
</style>