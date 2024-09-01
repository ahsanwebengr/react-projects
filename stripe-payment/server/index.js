import express from 'express';
import Stripe from 'stripe';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();

// Enable CORS
app.use(cors());

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(bodyParser.json());

app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency } = req.body;

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(500).send({
      error: error.message,
    });
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));
