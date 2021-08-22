<template>
  <section class="restaurantinfo">
    <div v-for="store in datasource" :key="store.id">
      <h2>{{ store.name }}</h2>
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
            <router-link
              class="view"
              :to="{ name: 'Order', params: { id: menuitem.id } }"
              >View Item ></router-link
            >
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    datasource: {
      type: [Array, Object],
    },
  },
  methods: {
    priceFormatting(item) {
      return "$" + item.toFixed(2);
    },
  },
});
</script>

<style lang="scss" scoped>
section.restaurantinfo {
  padding: 20px 200px;

  .items {
    height: 250px;
    border-radius: 5px;
    background-size: cover;
    position: relative;
    box-shadow: 2px 6px 6px 0 rgb(215, 215, 215);
  }

  .iteminfo {
    background: white;
    width: 100%;
    padding: 15px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }

  .row {
    margin: 30px 0 60px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0px;

    .view {
      height: 20px;
      border-radius: 0.1rem;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      background: white;
      border: 1px solid #555;
      color: black;
    }
  }
}
</style>
