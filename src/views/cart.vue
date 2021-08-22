<template>
  <main class="container cart">
    <h2 class="animate__animated animate__fadeInDown">Cart</h2>

    <section v-if="cartCount > 0">
      <table>
        <tr>
          <thead>
            <tr>
              <th>Item</th>
              <th>Add Ons</th>
              <th>Amount</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.id">
              <td>
                {{ item.item }}
                <span v-if="item.options">- {{ item.options }}</span>
              </td>
              <td>
                <span v-for="addon in item.addOns" :key="addon" class="comma">{{
                  addon
                }}</span>
              </td>
              <td>{{ item.count }}</td>
              <td>{{ item.combinedPrice }}</td>
            </tr>
            <tr>
              <td colspan="3"></td>
              <td class="total">Total: ${{ totalPrice.toFixed(2) }}</td>
            </tr>
          </tbody>
        </tr>
      </table>
    </section>
    <section v-else>
      <AppEmptyCart />
    </section>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import AppEmptyCart from "../components/AppEmptyCart.vue";
export default defineComponent({
  components: {
    AppEmptyCart,
  },
  computed: {
    ...mapState(["cart"]),
    ...mapGetters(["totalPrice", "cartCount"]),
  },
});
</script>

<style lang="scss" scoped>
.cart.container {
  padding: 100px;
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    text-align: center;
  }

  .total {
    font-weight: bold;
  }
  table {
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 40px auto;
    padding: 0;
    table-layout: fixed;
    border-radius: 5px;
  }

  table caption {
    font-size: 1.5em;
    margin: 0.5em 0 0.75em;
  }

  table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
    padding: 0.35em;
  }

  table th,
  table td {
    padding: 0.625em;
    text-align: center;
  }

  table th {
    font-size: 0.85em;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  @media screen and (max-width: 600px) {
    table {
      border: 0;
    }

    table caption {
      font-size: 1.3em;
    }

    table thead {
      border: none;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    table tr {
      border-bottom: 3px solid #ddd;
      display: block;
      margin-bottom: 0.625em;
    }

    table td {
      border-bottom: 1px solid #ddd;
      display: block;
      font-size: 0.8em;
      text-align: right;
    }

    table td::before {
      /*
    * aria-label has no advantage, it won't be read inside a table
    content: attr(aria-label);
    */
      content: attr(data-label);
      float: left;
      font-weight: bold;
      text-transform: uppercase;
    }

    table td:last-child {
      border-bottom: 0;
    }
  }
}
</style>