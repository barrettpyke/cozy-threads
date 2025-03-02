'use client';
import { getCartFromStorage } from '@/helpers/cart';
import { CheckoutProvider } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { stripe } from '@/helpers/stripe';
import LoadingSpinner from './LoadingSpinner';

const CheckoutPage: React.FC = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cart = getCartFromStorage();

  useEffect(() => {
    if (cart.length) {
      fetch('api/create-checkout-session', {
        method: 'POST',
        body: JSON.stringify(cart),
      })
        .then((response) => response.json())
        .then((json) => setClientSecret(json.clientSecret))
        .then(() => setIsLoading(false));
    }
  }, []);

  if (!cart.length) {
    return (
      <div className="flex justify-center">
        Please add something to your cart to checkout!
      </div>
    );
  }

  return (
    <>
      {clientSecret && !isLoading ? (
        <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm />
        </CheckoutProvider>
      ) : (
        <div className="flex justify-center mt-30">
          <LoadingSpinner width={5} height={5} />
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
