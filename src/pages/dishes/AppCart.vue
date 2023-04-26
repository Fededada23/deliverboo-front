<script>
import { store } from '../../store';
import axios, { formToJSON } from 'axios';

export default {
    data() {
        return {
            store,
            name_client: '',
            surname_client: '',
            email_client: '',
            phone_client: '',
            address_client: '',
            success: false,
            errors: {}

        }
    },
    methods: {
        removeCart(index) {
            store.cart.splice(index, 1)

            let cartstorage = store.cart
            localStorage.setItem("cart", JSON.stringify({ cartstorage }))
        },
        removeDish(index, beta) {
            if(store.cart[index].length >= 1 && store.cart[index][beta].quantity > 1) {
                store.cart[index][beta].quantity--
            }
            else if (store.cart[index].length > 1 && store.cart[index][beta].quantity == 1) {
                store.cart[index].splice(beta, 1)
            }
            else if (store.cart[index].length == 1 && store.cart[index][beta].quantity == 1) {
                store.cart.splice(index, 1)
            }

            let cartstorage = store.cart
            localStorage.setItem("cart", JSON.stringify({ cartstorage }))
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
        partialPrice(item) {
            let partialPriceOk = 0;

            for (let i = 0; i < item.length; i++) {
                partialPriceOk += item[i].dish.price * item[i].quantity
            }

            return partialPriceOk
        },
        sendForm() {
            
            if(store.cart.length != 0) {

                console.log('array-cart pieno')
                store.form = {
                    name_client: this.name_client,
                    surname_client: this.surname_client,
                    email_client: this.email_client,
                    phone_client: this.phone_client,
                    address_client: this.address_client,
                    shopping_cart: store.cart
                }

                let formstorage = store.form
                localStorage.setItem("form", JSON.stringify({ formstorage }))

                let emptyCart = document.querySelector('.empty-cart');
                emptyCart.classList.add('d-none')
                emptyCart.classList.remove('d-inline-block')

                location.href = 'http://localhost:5173/payment'
            }
            else {

                console.log('array-cart vuoto')
                let emptyCart = document.querySelector('.empty-cart');
                emptyCart.classList.remove('d-none')
                emptyCart.classList.add('d-inline-block')
            }
        }
    },
    mounted() {
        this.totalPrice()
    }
}
</script>

<template>
    <main>
        <section class="container">
            <div class="row my-5">
                <div class="col-md-6">

                    <!-- Form -->
                    <form @submit.prevent="sendForm">
                        <div class="col-12">
                            <div class="col-12 col-md-10">
                                <label class="control-label fw-bold my-2" for="nome">Nome</label>
                                <input type="text" class="form-control" name="name_client" id="name" v-model="name_client"
                                    placeholder="Inserisci il nome" required pattern="\S(.*\S)?">
                                <div v-for="(error, index) in errors.name_client" :key="`message-error-${index}`"
                                    class="alert alert-danger my-2">
                                    <p class="fw-bold">{{ error }}</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-10">
                                <label class="control-label fw-bold my-2" for="cognome">Cognome</label>
                                <input type="text" class="form-control" name="surname_client" id="surname"
                                    v-model="surname_client" placeholder="Inserisci il cognome" required pattern="\S(.*\S)?">
                                <div v-for="(error, index) in errors.surname_client" :key="`message-error-${index}`"
                                    class="alert alert-danger my-2">
                                    <p class="fw-bold">{{ error }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="col-12 col-md-10">
                                <label class="control-label fw-bold my-2" for="mail">Email</label>
                                <input type="email" class="form-control" name="email_client" id="mail" v-model="email_client"
                                    placeholder="Inserisci l'email" required pattern=".+@.+\..+\.*$">
                                <div v-for="(error, index) in errors.email_client" :key="`message-error-${index}`"
                                    class="alert alert-danger my-2">
                                    <p class="fw-bold">{{ error }}</p>
                                </div>
                            </div>
                            <div class="col-12 col-md-10">
                                <label class="control-label fw-bold my-2" for="phone">Telefono</label>
                                <input type="tel" minlength="9" class="form-control" name="phone_client" id="phone"
                                    v-model="phone_client" placeholder="Inserisci il Numero di telefono" required pattern="\S(.*\S)?">
                                <div v-for="(error, index) in errors.phone_client" :key="`message-error-${index}`"
                                    class="alert alert-danger my-2">
                                    <p class="fw-bold">{{ error }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="col-12 col-md-10">
                                <label class="control-label fw-bold my-2" for="address">Indirizzo</label>
                                <input type="text" class="form-control" name="address_client" id="address"
                                    v-model="address_client" placeholder="Inserisci la via" required pattern="\S(.*\S)?">
                                <div v-for="(error, index) in errors.address_client" :key="`message-error-${index}`"
                                    class="alert alert-danger my-2">
                                    <p class="fw-bold">{{ error }}</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-4 mb-5">

                            <button type="submit" class="btn-personale">Paga</button>
                        </div>
                        <div class="empty-cart d-none alert alert-danger my-2">
                            devi mettere qualcosa nel carrello
                        </div>
                    </form>
                </div>

                <!-- Lista Ordini -->
                <div class="p-3 col-sm-12 col-md-6 col-lg-5 border-3 border-personale">
                    <div>
                        <ul class="list-unstyled">
                            <li v-for="(item, index) in store.cart" :key="index">
                                <div class="d-flex justify-content-between">

                                    <div class="my-auto">{{ item[0].dish.restaurant.user.name }}</div>


                                    <div @click="removeCart(index)" class="prova">&#8861;</div>

                                </div>
                                <div v-for="(value, beta) in store.cart[index]" :key="beta">
                                    <div class="d-flex ms-2 justify-content-between card-personale">
                                        <div class="my-auto">
                                            <p><span class="prova" @click="removeDish(index, beta)">&#8861;</span>x {{ value.quantity }} <span class="fw-bold ms-2">{{ value.dish.name
                                            }}:</span></p>
                                            
                                        </div>
                                        <div class="my-auto">
                                            <span class="">{{ `${value.dish.price}&#8364;` }} = {{ (value.dish.price *
                                                value.quantity).toFixed(2) }}&#8364;</span>
                                        </div>
                                    </div>
                                </div>
                                <h5>Prezzo del ristorante: {{ partialPrice(item).toFixed(2) }}€</h5>
                            </li>
                        </ul>

                        <div>
                            <h2>Total: {{ totalPrice() }}€</h2>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
.card-personale {
    border-bottom: 1px solid #d5d6d6;
}

.prova {
    font-size: 30px;
    cursor: pointer;
    color: red;
}

.border-personale {
    border: 2px solid #d5d6d6;
    border-radius: 1em;
    box-shadow: 0.8em 0.8em 0.3em 0.1em rgba(19 19 20 / 37%);
}

.btn-personale {
    // width: 150px;
    // height: 50px;
    border-radius: 5px;
    transition: all 0.3s;
    cursor: pointer;
    // font-size: 1.2rem;
    background-color: #315cfd;
    border: 3px solid #315cfd;
    text-decoration: none;
    color: white;
    padding: 5px 20px;
    margin-top: 15px;
    display: inline-block;
    text-align: center;

    &:hover {
        // border: #315cfd;
        background: #fff;
        color: #315cfd;
        // font-size: 1.5rem;
    }
}
</style>