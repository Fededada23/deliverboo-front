import { createRouter, createWebHistory } from 'vue-router'

// importiamo le componenti delle router

import AppHomepage from './pages/AppHomepage.vue';
import AppFailed404 from './components/AppFailed404.vue';
import AppIndexRestaurants from './pages/restaurants/AppIndexRestaurants.vue';
import AppIndexMenu from './pages/dishes/AppIndexMenu.vue';
import AppCart from './pages/dishes/AppCart.vue';
import payment from './pages/payment.vue';
import AppOrderRecap from './pages/AppOrderRecap.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'homepage',
      path: '/',
      component: AppHomepage
    },
    {
      path: '/:path*',  /* il ":whatever*" diventa un selettore universale di tutte le pagine che non dovessero corrispondere con le rotte qui presenti*/
      name: 'failed',
      component: AppFailed404
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: AppIndexRestaurants
    },
    {
      path: '/dishes/:id',
      name: 'dishes',
      component: AppIndexMenu
    },
    {
      path: '/cart',
      name: 'cart',
      component: AppCart
    },
    {
      path: '/payment',
      name: 'payment',
      component: payment
    },
    {
      path: '/recap',
      name: 'order-recap',
      component: AppOrderRecap
    }
  ]
})

export { router }
