<template>
  <main class="container">
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
    await this.$store.dispatch('getFoodData')
  },
});
</script>

<style lang="scss">
@import url(./assets/main.scss);
</style>
