<template>
  <section
    class="masthead"
    role="img"
    aria-label="Image Description"
  >
    <h1 class="animate__animated animate__bounce">Vite Food App</h1>
    <router-link to="/restaurant">Find a restaurant</router-link>
    <router-view></router-view>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
});
</script>

<style lang="scss" scoped>
.masthead {
  height: 80vh;
  padding: 40px;
  margin-bottom: 60px;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 37%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(../assets/headerimg.jpg) no-repeat center center scroll;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 8vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 30px;
}
</style>
