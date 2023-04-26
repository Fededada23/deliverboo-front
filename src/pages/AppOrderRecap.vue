<script>
import { store } from '../store';
import axios, { formToJSON } from 'axios';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        getForm() {
            console.log(store.form)
            axios.post(`${store.url_restaurants}api/cart`, store.form).then((response) => {
                if (!response.data.success) {
                    store.loading = false
                }
                else {
                    store.form
                    this.success = true,
                    store.loading = false
                }
            })
        },
        totalPrice() {
            let totalPrice = 0
            for (let i = 0; i < store.cart.length; i++) {

                for (let j = 0; j < store.cart[i].length; j++) {
                    totalPrice += (store.cart[i][j].dish.price * store.cart[i][j].quantity)
                }
            }

            store.totalPrice = totalPrice.toFixed(2)
            return store.totalPrice
        },
    },
    created() {
        let dataform = JSON.parse(localStorage.getItem("form"));
        store.form = dataform.formstorage
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if (from.name === 'payment') {
                vm.getForm();
            }
        });
    },
    beforeRouteLeave() {
        store.cart = []
        store.form = {}

        let cartstorage = store.cart
        localStorage.setItem("cart", JSON.stringify({ cartstorage }))

        let formstorage = store.form
        localStorage.setItem("form", JSON.stringify({ formstorage }))
    },
}

</script>
<template >
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
                <img src="../../img/logo-blue.png" class="logo" alt="logo">
            </div>
            <div class="col-12 text-center my-1">
                <h2>Ottima scelta, {{ store.form.name_client }}</h2>
                <h2>Grazie per il tuo ordine</h2>
            </div>
        </div>

        <div class="col-12 border border-secondary my-2"></div>
        <div class="row mt-2 justify-content-center text-center">

            <div class="d-flex flex-column fs-2 col-12 col-lg-6 ">
                <div>
                    Nome: {{ store.form.name_client }}
                </div>
                <div>
                    Cognome: {{ store.form.surname_client }}
                </div>
                <div>
                    Email: {{ store.form.email_client }}
                </div>
                <div>
                    Via: {{ store.form.address_client }}
                </div>
                <div>
                    Tel: {{ store.form.phone_client }}
                </div>
            </div>

            <div class="col-12 col-lg-6">
                <img src="../../img/rider.gif" class="w-100" alt=" gif-rider">
            </div>

        </div>
        <div class="col-12 border border-secondary my-2"></div>
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                <h1>Totale</h1>
                <h1>{{ totalPrice() }}&#8364;</h1>
            </div>
        </div>
        <div class="col-12 border border-secondary my-2"></div>
        <div class="row">
            <div class="col-12 text-center mt-2">
                <h4>Domande sull ordine?</h4>
                <h5 class="my-4">Chiama il partner al numero +39 333 333 333</h5>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.logo {
    width: 50vw;
}
</style>
