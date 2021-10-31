const stripe = require('stripe')('sk_test_51IkrCxBBmwstr0BYPyKXlDzYYaWn3TvXeCbclOtlqCLNU09t2ZTw0h470yfvO0WlkO3GgSa2wRuyOzKjf7eN1Q8v001PDiXXIr');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: 'price_1JpSf4BBmwstr0BYsDs7lLmZ',
        quantity: 1,
      },
    ],
    payment_method_types: [
      'card',
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.redirect(303, session.url)
});

app.listen(process.env.PORT || 4242, () => console.log('Running on port 4242'));