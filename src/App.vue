<template>
  <div id="app">
    <b-modal-wrapper></b-modal-wrapper>
    <navbar></navbar>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import BModalWrapper from "@/components/BModalWrapper.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: { BModalWrapper, Navbar }
});
</script>
