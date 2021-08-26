<template>
  <section class="content">
    <app-menu />
    <router-view />
  </section>
  <app-footer />
</template>

<script>
import 'animate.css'
import { defineComponent } from "vue";
import AppMenu from "./components/AppMenu.vue";
import AppFooter from "./components/AppFooter.vue";
export default defineComponent({
  name: "App",
  components: {
    AppMenu,
    AppFooter,
  },
  async created() {
    // TODO is there a pre-request plugin something can handle this, seems weird to be here
    await this.$store.dispatch("getFoodData");
  },
});
</script>

<style lang="scss">
// @import url(assets/main.scss);
.content {
  min-height: calc(100vh - 50px);
  width: 100%;
}
</style>
