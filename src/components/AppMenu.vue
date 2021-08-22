<template>
  <nav>
    <ul>
      <router-link :to="{ name: 'Home' }"><AppLogo /></router-link>
      <router-link :to="{ name: 'Restaurant' }">Restaurant</router-link>
    </ul>
    <div class="smallnum" v-if="cartCount > 0">{{ cartCount }}</div>
    <router-link :to="{ name: 'Cart' }">Cart</router-link>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
import AppLogo from "./AppLogo.vue";
import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    AppLogo,
  },
  computed: {
    ...mapGetters(["cartCount"]),
  },
});
</script>

<style lang="scss" scoped>
nav {
  padding: 5px 60px;
  background: #082c40;
  color: white;
  position: relative;
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;

    >*{
      padding-right: 40px;
    }
  }
}
</style>
