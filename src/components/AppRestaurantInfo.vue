<template>
  <section class="restaurantinfo">
    <div v-for="store in datasource" :key="store.id">
      <h2>{{store.name}}</h2>
      <p>DeliveryT ime {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <div
          v-for="menuitem in store.menu"
          :key="menuitem.id"
          class="items"
          :style="`background: url(${egg}) no-repeat center center`"
        >
          <div class="iteminfo">
            <!-- <img :src="egg" alt="food image"> -->
            <div>
              <h4>{{ menuitem.item }}</h4>
              <p>{{ priceFormatting(menuitem.price) }}</p>
            </div>
            <!-- <a :href="`/items/${menuitem.id}`">
              <button class="ghost">View Item ></button>
            </a> -->
            <router-link :to="'/views/' +`${menuitem.id}`">View Item ></router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
import egg from '../assets/dimsum-eggplant.jpg';
export default defineComponent({
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  data: () => ({
    egg,
  }),
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2)
    },
  },
});
</script>
