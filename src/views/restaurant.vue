<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @change="handleselectedResaurant" />
      <pre>{{ selectedResaurant }}</pre>
    </div>
    <AppRestaurantInfo :datasource="filteredRestaurants"/>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import AppRestaurantInfo from '../components/AppRestaurantInfo.vue';
import AppSelect from '../components/AppSelect.vue';
import { mapState } from 'vuex';

export default defineComponent({
  name: 'Restaurant',
  components: {
    AppRestaurantInfo,
    AppSelect
  },
  data() {
    return {
      selectedResaurant: '',
    }
  },
  computed: {
    ...mapState([
      'fooddata',
    ]),
    filteredRestaurants() {
      if (this.selectedResaurant) {
        return this.fooddata.filter(el => {
          let name = el.name.toLowerCase()
          return name.includes(this.selectedResaurant)
        })
      }
      return this.fooddata
    }
  },
  methods: {
    handleselectedResaurant(data) {
      if (data && data.option) {
        this.selectedResaurant = data.option;
      }
    }
  }
});
</script>
