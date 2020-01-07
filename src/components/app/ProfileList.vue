<template>
  <div class="profile-list">
    <ul>
      <li>
        <strong>Username:</strong>
        example1
      </li>

      <li>
        <strong>Email:</strong>
        example@example.xom
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ProfileList'
});
</script>


<style lang="scss" scoped>
.profile-list {
  margin-top: 1.6em;
  margin-bottom: 1.6em;
  margin-left: 0.6em;
  margin-right: 0.6em;
}
</style>