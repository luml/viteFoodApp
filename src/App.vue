<template>
  <main id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
    <router-link :to="{ name: 'Restaurant' }">Restaurant</router-link>|
  </main>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  async created() {
    // TODO is there a pre-request plugin something can handle this, seems weird to be here
    await this.$store.dispatch("getFoodData");
  }
});
</script>

<style lang="scss">
@import url(./assets/main.scss);
</style>
