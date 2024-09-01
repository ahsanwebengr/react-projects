/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckoutForm = ({ cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  console.log("🚀 ~ CheckoutForm ~ clientSecret:", clientSecret);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const totalAmount = cart.reduce((acc, item) => acc + item.price, 0);
        const { data } = await axios.post('http://localhost:3000/create-payment-intent', {
          amount: totalAmount, // Amount in smallest currency unit (e.g., cents)
          currency: 'usd',
        });
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error fetching payment intent:', error);
      }
    };

    if (cart.length) {
      fetchPaymentIntent();
    }
  }, [cart]);

  const handleSubmit = async event => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      return;
    }

    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      setError(error.message);
      setProcessing(false);
    } else if (paymentIntent.status === 'succeeded') {
      setSucceeded(true);
      setProcessing(false);
    }
  };

  return (
    <div className='checkout-container'>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className='checkout-form'>
        <div className='form-group'>
          <label htmlFor='card-element'>Card Details</label>
          <CardElement id='card-element' className='card-element' />
        </div>
        <button
          type='submit'
          className='submit-button'
          disabled={!stripe || processing || succeeded}
        >
          {processing ? 'Processing...' : 'Pay Now'}
        </button>
        {error && <div className='error-message'>{error}</div>}
        {succeeded && <div className='success-message'>Payment succeeded!</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
