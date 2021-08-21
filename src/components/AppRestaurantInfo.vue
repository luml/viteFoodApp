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
          :style="`background: url(../assets/${menuitem.img}) no-repeat center center`"
        >
          <div class="iteminfo">
            <div>
              <h4>{{ menuitem.item }}</h4>
              <p>{{ priceFormatting(menuitem.price) }}</p>
            </div>
            <router-link :to="{ name: 'Order', params: { id: menuitem.id } }">View Item ></router-link>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2)
    },
  },
});
</script>
