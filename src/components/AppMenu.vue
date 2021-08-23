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
  height: 50px;

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
  .smallnum {
    position: absolute;
    border-radius: 50%;
    background: white;
    color: black;
    top: 17px;
    right: 30px;
    width: 15px;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    height: 15px;
    font-size: 10px;
    padding: 6px;
    font-weight: bold;
  }
}
</style>
