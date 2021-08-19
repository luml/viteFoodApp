<template>
  <nav>
    <ul>
      <li><a to="/"><AppLogo /></a></li>
      <li><a to="/restaurant">Restaurants</a></li>
    </ul>
    <div class="smallnum" v-if="cartCount > 0">{{cartCount}}</div>
    <a href="/cart">Cart</nuxt-link>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';
import AppLogo from '@/components/AppLogo.vue';
import { mapGetters } from 'vuex';

export default defineComponent({
  components: {
    AppLogo,
  },
  computed: {
    ...mapGetters([
      'cartCount',
    ])
  },
});
</script>

<style lang="scss" scoped>

</style>
