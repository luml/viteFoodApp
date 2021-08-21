<template>
  <main class="container">
    <AppHeader />
  </main>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
  components: {
    AppHeader
  }
});
</script>

<style lang="scss" scoped>
</style>