import { createRouter, createWebHistory } from 'vue-router';
import Restaurant from './views/restaurant.vue';
import Order from './views/items/index.vue';
import Home from './views/home.vue';
import Cart from './views/cart.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/restaurant',
    name: 'Restaurant',
    component: Restaurant
  },
  { 
    path: '/views/:id',
    props: true,
    name: 'Order',
    component: Order
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})