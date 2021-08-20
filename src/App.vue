<template>
  <main class="container">
    <!-- TODO need to put you big head away from here -->
    <AppHeader />
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import AppHeader from './components/AppHeader.vue';
export default defineComponent({
  components: {
    AppHeader,
  },
  async created() {
    // TODO is there a pre-request plugin something can handle this, seems weird to be here
    await this.$store.dispatch('getFoodData')
  },
});
</script>

<style lang="scss">
@import url(./assets/main.scss);
</style>
