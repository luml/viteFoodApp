<template>
  <main class="container">
    <!-- <AppHeader /> -->
    <AppRestaurantInfo :datasource="fooddata"/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
// import AppHeader from './components/AppHeader.vue';
import AppRestaurantInfo from './components/AppRestaurantInfo.vue';
import { mapState } from 'vuex';
export default defineComponent({
  components: {
    // AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState([
      'fooddata',
    ])
  },
  async created() {
    await this.$store.dispatch('getFoodData')
  },
});
</script>

<style lang="scss">
@import url(./assets/main.scss);
</style>
