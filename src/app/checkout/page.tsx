'use client';

import { CheckoutProvider } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import { stripe } from '../../helpers/stripe';
import CheckoutForm from '@/components/CheckoutForm';
import { getCartFromStorage } from '../../helpers/cart';

export default function Page() {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    fetch('api/create-checkout-session', {
      method: 'POST',
      body: JSON.stringify(getCartFromStorage()),
    })
      .then((response) => response.json())
      .then((json) => setClientSecret(json.clientSecret));
  }, []);

  if (clientSecret) {
    return (
      <CheckoutProvider stripe={stripe} options={{ clientSecret }}>
        <CheckoutForm />
      </CheckoutProvider>
    );
  } else {
    return null;
  }
}
