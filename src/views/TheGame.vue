<template>
  <div>
    <section class="section">
      <div class="container">
        <h2 class="title">
          {{ gId }}
        </h2>
        <div class="details">
          {{ details }}
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'TheGame',
  props: {
    gId: {
      type: String,
      required: true,
      default: '-1'
    }
  },
  data() {
    return {
      details: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
Tenetur quibusdam eum quos expedita laborum totam velit perspiciatis exercitationem architecto sapiente?

Hic recusandae eius magni fuga accusantium optio quas nulla maiores?
`
    };
  }
});
</script>

<style lang="scss" scoped>
.details {
  white-space: pre-line;
}
</style>