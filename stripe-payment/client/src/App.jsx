import { Elements } from '@stripe/react-stripe-js';
import ProductList from './ProductList';
import CheckoutForm from './CheckoutForm';
import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const App = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);

  const [cart, setCart] = useState([]);
  const cartItems = cart.map(item => item.name);
  const hasCart = cart.length > 0;

  return (
    <div className='app'>
      {hasCart && <h2>Cart Products: {cartItems.join(',')} </h2>}
      <ProductList onAddToCart={setCart} />
      <Elements stripe={stripePromise}>
        <CheckoutForm cart={cart} />
      </Elements>
    </div>
  );
};

export default App;
