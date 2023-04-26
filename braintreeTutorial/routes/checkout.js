const express = require('express');
const router = express.Router();
const braintree = require('braintree');
import { store } from '../../src/store'

router.post('/', (req, res, next) => {
    const gateway = new braintree.BraintreeGateway({
        environment: braintree.Environment.Sandbox,
        // Use your own credentials from the sandbox Control Panel here
        merchantId: 'bmyncnmr5gbq29q8',
        publicKey: 'ndds586cbkz6ddh3',
        privateKey: '1ec1b8095f7614dca7ee1c12b477b8e9'
    });

    // Use the payment method nonce here
    const nonceFromTheClient = req.body.paymentMethodNonce;
    // Create a new transaction for $10
    const newTransaction = gateway.transaction.sale({
        amount: store.totalPrice,
        paymentMethodNonce: nonceFromTheClient,
        options: {
            // This option requests the funds from the transaction
            // once it has been authorized successfully
            submitForSettlement: true
        }
    }, (error, result) => {
        if (result) {
            res.send(result);
        } else {
            res.status(500).send(error);
        }
    });
});

module.exports = router;