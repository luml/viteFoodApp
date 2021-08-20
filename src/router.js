import { createRouter, createWebHistory } from 'vue-router';
import Restaurant from './views/restaurant.vue';
import Item from './views/items/index.vue';
import Home from './App.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/restaurant',
    component: Restaurant
  },
  { 
    path: '/views/:id',
    component: Item
  },
]
export const router = createRouter({
  history: createWebHistory(),
  routes,
})