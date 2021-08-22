<template>
  <main class="container">
    <AppHeader />
    <AppRestaurantInfo :datasource="fooddata"/>
  </main>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppRestaurantInfo from '../components/AppRestaurantInfo.vue';
import { defineComponent } from "vue";
import { mapState } from "vuex";
export default defineComponent({
  name: "Home",
  components: {
    AppHeader,
    AppRestaurantInfo,
  },
  computed: {
    ...mapState([
      'fooddata',
    ])
  }
});
</script>

<style lang="scss" scoped>
</style>