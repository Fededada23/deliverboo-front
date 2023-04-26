import { createApp } from 'vue'
import App from './App.vue'
import "/node_modules/bootstrap/dist/css/bootstrap.css"
import * as bootstrap from 'bootstrap'
import { router } from './router.js'
import { store } from './store'

createApp(App).use(router).mount('#app')


document.addEventListener('DOMContentLoaded', function () {
    const button = document.querySelector('#submit-button');

    braintree.dropin.create({
        authorization: 'sandbox_mfy8mkgg_bmyncnmr5gbq29q8',
        selector: '#dropin-container'
    }, function (err, instance) {
        button.addEventListener('click', function () {
            // instance.requestPaymentMethod(function (err, payload) {


            // });
            instance.requestPaymentMethod(function (err) {
                if (err) {
                    console.log('Request Payment Method Error', err);
                    return;
                }
                // Add the nonce to the form and submit
                // document.querySelector('#nonce').value = payload.nonce;
                // form.submit();
                setTimeout(() => {
                    store.payment = true
                    router.push('/recap')

                }, 2000);
            });
        })
    });
});


