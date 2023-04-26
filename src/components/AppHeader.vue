<script>
import { store } from '../store';
export default {
    name: 'AppHeader',
    data() {
        return {
            data_navbar: [
                {
                    label: 'Homepage',
                    routeName: 'homepage'
                },
                {
                    label: 'Ristoranti',
                    routeName: 'restaurants'
                },
                {
                    label: 'Cart',
                    routeName: 'cart'
                },
            ],
            store,
        }
    }
}
</script>

<template>
    <header class="">
        <nav class="navbar flex-row navbar-expand-md flex-md-nowrap p-3 shadow" style="background-color:#00ccbb">
            <div class="container">
                <router-link :to="{ name: 'homepage' }" class="navbar-brand me-0">
                    <img style="width: 10rem" src="../../img/logo-white.png" alt="Logo deliveboo">
                </router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(value, index) in data_navbar" :key="index" class="nav-item">
                            <div v-if="value.label == 'Cart'">
                                <router-link :to="{ name: value.routeName }" class="nav-link position-relative"
                                    aria-current="page" href="#">
                                    <button class="btn-personal"
                                        :class="$route.name == value.routeName ? 'present-page' : ''">
                                        <i class="fa-solid fa-cart-shopping"></i>
                                        <!-- <span
                                                class="position-absolute top-0 start-75 translate-middle badge rounded-pill bg-danger">prova
                                                <span class="visually-hidden"></span>
                                            </span> -->
                                    </button>
                                </router-link>
                            </div>
                            <router-link v-else :to="{ name: value.routeName }" class="nav-link"
                                :class="$route.name == value.routeName ? 'text-white' : ''" aria-current="page"
                                href="#"><button class="btn-personal"
                                    :class="$route.name == value.routeName ? 'present-page' : ''">{{ value.label
                                    }}</button></router-link>
                        </li>
                        <li class="mt-16 ">
                            <a class="btn-personal text-decoration-none" href="http://127.0.0.1:8000/">Area Clienti</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
@use '../styles/partials/mixins' as *;

.mt-16 {
    margin-top: 16px;
}

.btn-personal {
    padding: 5px 10px;
    background-color: #ffff;
    color: black;
    border: 3px solid #d0eb99;
    border-radius: 10px;

    &:hover {
        background-color: #d0eb99;
        border: #0f7d8a 3px solid;
    }
}

.btn-personal.present-page {
    background-color: #d0eb99;
    border: #0f7d8a 3px solid;
}
</style>