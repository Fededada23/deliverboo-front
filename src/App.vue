<script>
import axios from 'axios'
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getRestaurants();

    // recupero le info da localStorage
    if (localStorage.getItem("cart")) {
      let dataCart = JSON.parse(localStorage.getItem("cart"));
      store.cart = dataCart.cartstorage;
      console.log(store.cart)
    }
  },
  methods: {
    getRestaurants() {

      axios.get(`${store.url_restaurants}api/restaurants?page=${store.current_page}`).then((response) => {
        if (response.data.success) {
          store.restaurants = response.data.result.data;
          store.loading = false;
          store.last_page = response.data.result.last_page;
          store.loading = false;

          console.log(store.restaurants)
        }
        else {
          this.$router.push('/failed');
        }
      })
    },

    changePage() {

      let stringJoin = store.prova.join()

      if (stringJoin == '') {
        axios.get(`${store.url_restaurants}api/restaurants?page=${store.current_page}`).then((response) => {
          if (response.data.success) {
            store.restaurants = response.data.result.data;
            store.loading = false;
            store.last_page = response.data.result.last_page;
            store.loading = false;

          }
          else {
            this.$router.push('/failed');
          }
        })
      }
      else {
        axios.get(`${store.url_restaurants}api/restaurants/${stringJoin}?page=${store.current_page}`).then((response) => {
          if (response.data.success) {
            store.restaurants = response.data.result.data;
            store.loading = false;
            store.last_page = response.data.result.last_page;
            store.loading = false;

          }
          else {
            this.$router.push('/failed');
          }
        })
      }
    }
  }
}
</script>

<template>
  <AppHeader />
  <router-view @increase-by="changePage" @decrease-by="changePage" @selectPage="changePage" />
  <AppFooter />
</template>

<style lang="scss"></style>
