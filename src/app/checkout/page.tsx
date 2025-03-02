'use client';

import { CheckoutProvider } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { stripe } from '../../helpers/stripe';
import CheckoutForm from '@/components/CheckoutForm';
import { getCartFromStorage } from '../../helpers/cart';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Page() {
  const [clientSecret, setClientSecret] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const cart = getCartFromStorage();

  useEffect(() => {
    if (cart) {
      fetch('api/create-checkout-session', {
        method: 'POST',
        body: JSON.stringify(cart),
      })
        .then((response) => response.json())
        .then((json) => setClientSecret(json.clientSecret))
        .then(() => setIsLoading(false));
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center mt-30">
        <LoadingSpinner width={8} height={8} />
      </div>
    );
  }

  if (clientSecret) {
    return (
      <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </CheckoutProvider>
    );
  } else {
    return (
      <div className="flex justify-center">
        Please add something to your cart to checkout!
      </div>
    );
  }
}
