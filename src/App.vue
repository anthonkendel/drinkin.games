<template>
  <div id="app">
    <modal-wrapper></modal-wrapper>
    <navbar></navbar>
  </div>
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";
import ModalWrapper from "@/components/ModalWrapper.vue";
import Vue from "vue";

export default Vue.extend({
  name: "App",
  components: { ModalWrapper, Navbar }
});
</script>
