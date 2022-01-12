require('dotenv').config();
const express = require('express');
const requireAuth = require('../middlewares/requireAuth');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const router = express.Router();

router.use(requireAuth);

router.get('/stripe-key', (req, res) => {
  const publishable_key = process.env.STRIPE_PUBLISHABLE_KEY;

  res.send({ publishableKey: publishable_key });
});

router.post('/checkout', async (req, res) => {
  // Use an existing Customer ID if this is a returning customer.
  // console.log('backend');
  // res.json({
  //   content: 'res to the frontend'
  // });
  const customer = await stripe.customers.create();
  const ephemeralKey = await stripe.ephemeralKeys.create(
    { customer: customer.id },
    { apiVersion: '2020-08-27' }
  );
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 1099,
    currency: 'eur',
    customer: customer.id,
    automatic_payment_methods: {
      enabled: true
    }
  });

  res.json({
    paymentIntent: paymentIntent.client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
  });
});

module.exports = router;
