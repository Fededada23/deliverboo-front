<script>
import { store } from '../../store';
import axios from 'axios';


import AppLoader from '../../components/AppLoader.vue';
import { nextTick } from 'vue';

export default {
    components: {
        AppLoader,
    },
    emits: [
        'increase-by',
        'decrease-by',
        'select-page',
    ],
    data() {
        return {
            store,
            open: false,
        }
    },
    methods: {
        increaseByOne() {
            if (store.current_page < store.last_page) {
                store.current_page += 1;
                this.$emit('increase-by')
            }
        },
        decreaseByOne() {
            if (store.current_page > 1) {
                store.current_page -= 1;
                this.$emit('decrease-by')
            }
        },
        selectPage(value) {
            store.current_page = value;
            this.$emit('select-page')
        },
        getTypes() {
            axios.get(`${store.url_restaurants}api/types`).then((response) => {
                if (response.data.success) {
                    store.types = response.data.result;
                }
                else {
                    this.$router.push('/failed');
                }
            })
        },
        // Multiselect
        openMultiselect() {
            this.open = !this.open
        },
        arrayVerify(id) {
            if(store.prova.includes(String(id))) {
                return true;
            }
            else {
                return false;
            }
        },
        innerTextChange() {
            if (store.prova.length == 0) {
                return 'Seleziona una Tipologia'
            }
            else {
                return `${store.prova.length}${' '}${'Selected'}`
            }
        },
        // fino a qui
        setFilter() {

            const inputTypes = document.querySelectorAll('.types-checks:checked')
            const arrayFiltered = []
            inputTypes.forEach(item => arrayFiltered.push(item.value))
            store.prova = arrayFiltered
            let stringJoin = store.prova.join()

            store.current_page = 1
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
        },
    },
    mounted() {
        this.getTypes()
    },
}
</script>

<template>
    <AppLoader v-if="store.loading" />
    <main v-else>
        <section>
            <div class="container mt-5">
                <div class="row">
                    <div class="col-12">
                        <div class="container-select mb-4">
                            <div class="select-btn" :class="open ? 'open' : ''" @click="openMultiselect()">
                                <div class="btn-text">{{ innerTextChange() }}</div>
                                <div class="arrow-dwn">
                                    <i class="fa-solid fa-chevron-down"></i>
                                </div>
                            </div>

                            <ul class="list-items">

                                <li class="item" v-for="(item, index) in store.types" :key="index" :class="arrayVerify(item.id) ? 'checked' : ''">
                                    <input type="checkbox" class="input-checkbox types-checks" :value="item.id" id="item.id"
                                        @click="setFilter()" name="types[]" :checked="arrayVerify(item.id)">
                                    <div class="checkbox">
                                        <i class="fa-solid fa-check check-icon"></i>
                                    </div>
                                    <div class="item-text">{{ item.name }}</div>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row gy-4">
                    <div class="col-12 col-sm-6 col-lg-3" v-for="(restaurant, index) in store.restaurants" :key="index">
                        <div class="card h-100">
                            <div class="container-img">
                                <img :src="restaurant.cover_path == null ? 'https://picsum.photos/id/1/200/300' : `${store.url_restaurants}storage/${restaurant.cover_path}`"
                                    :alt="restaurant.user.name" class="card-img-top">
                            </div>
                            <div class="card-body d-flex flex-column text-center">
                                <div>
                                    <h4>{{ restaurant.user.name }}</h4>
                                    <h6>Via: {{ restaurant.address }}</h6>
                                </div>
                                <div class="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div class="mb-4">
                                        <p class="mb-0">
                                            <em><strong>Tipologia:</strong></em>
                                        </p>
                                        <div>
                                            <span class="badge bg-success mx-1" v-for="(type, index) in restaurant.types"
                                                :key="index">{{ type.name }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <router-link :to="{ name: 'dishes', params: { id: restaurant.id } }"
                                                class="btn btn-secondary">Vai al Menù</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <div class="mycard">
                            <div class="d-flex justify-content-center">
                                <button @click="decreaseByOne()" class="btn btn-square btn-primary fs-6"
                                    :class="store.current_page == 1 ? 'disabled' : ''">&#8678;</button>
                                <ul class="list-unstyled d-flex mb-0">
                                    <li v-for="(value, index) in store.last_page" :key="index">
                                        <button @click="selectPage((value))" class="btn btn-square btn-light"
                                            :class="store.current_page == value ? 'bg-dark-subtle' : ''">{{ value
                                            }}</button>
                                    </li>
                                </ul>
                                <button @click="increaseByOne()" class="btn btn-square btn-primary fs-6"
                                    :class="store.current_page == store.last_page ? 'disabled' : ''">&#8680;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.container-img {
    height: 230px;

    img {
        max-height: 100%;
        object-fit: scale-down;
    }
}

.container-select {
    position: relative;
    max-width: 320px;
    width: 100%;

    .select-btn {
        display: flex;
        height: 50px;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        border-radius: 8px;
        cursor: pointer;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    }

    .select-btn .btn-text {
        font-size: 17px;
        font-weight: 400;
        color: #333;
    }

    .select-btn .arrow-dwn {
        display: flex;
        height: 21px;
        width: 21px;
        color: #fff;
        font-size: 14px;
        border-radius: 50%;
        background: #6e93f7;
        align-items: center;
        justify-content: center;
        transition: 0.3s;
    }

    .select-btn.open .arrow-dwn {
        transform: rotate(-180deg);
    }

    .list-items {
        position: absolute;
        top: 50px;
        margin-top: 0px;
        border-radius: 8px;
        padding: 0px;
        background-color: #fff;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        height: 0;
        width: 100%;
        z-index: 9999;
        overflow-y: hidden;
        transition: 1s all;
    }

    .select-btn.open~.list-items {
        margin-top: 15px;
        height: 250px;
        padding: 16px;
        overflow-y: auto;
    }

    .list-items .item {
        display: flex;
        align-items: center;
        list-style: none;
        height: 50px;
        cursor: pointer;
        transition: 0.3s;
        /* padding: 0 15px; */
        border-radius: 8px;
        position: relative;
    }

    .list-items .item:hover {
        background-color: #e7edfe;
    }

    .item .item-text {
        font-size: 16px;
        font-weight: 400;
        color: #333;
    }

    .item .input-checkbox {
        position: absolute;
        left: 0;
        z-index: 1;
        cursor: pointer;
        opacity: 0;
        height: 100%;
        width: 100%;
    }

    .item .checkbox {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 16px;
        width: 16px;
        border-radius: 4px;
        margin-right: 12px;
        border: 1.5px solid #c0c0c0;
        transition: all 0.3s ease-in-out;
        margin-left: 20px;
    }

    /* verifico se è :checked l'input */
    .item .input-checkbox:checked~.checkbox {
        background-color: #4070f4;
        border-color: #4070f4;
        box-shadow: 0px 0px 5px 2px #4070f4;
    }

    /* .item.checked .checkbox{
            background-color: #4070f4;
            border-color: #4070f4;
        } */
    .checkbox .check-icon {
        color: #fff;
        font-size: 11px;
        transform: scale(0);
        transition: all 0.2s ease-in-out;
    }

    .item.checked .check-icon {
        transform: scale(1);
    }
}</style>