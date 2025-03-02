import React, { useState } from 'react';
import { PaymentElement, useCheckout } from '@stripe/react-stripe-js';
import { StripeCheckoutLineItem } from '@stripe/stripe-js';
import OrderSummary from './OrderSummary';
import Button from './Button';
import { clearCart } from '@/helpers/cart';
import LoadingSpinner from './LoadingSpinner';

const CheckoutForm: React.FC = () => {
  const checkout = useCheckout();

  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const lineItems: StripeCheckoutLineItem[] = checkout.lineItems;
  const total: number = checkout.total.total;

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError('');
    e.preventDefault();
    setEmail(e.target.value);
  };

  const onSubmitClick = () => {
    checkout.updateEmail(email).then((result) => {
      if (result.type === 'error') {
        setError(result.error.message);
        return;
      }
      setIsLoading(true);

      checkout.confirm().then((result) => {
        if (result.type === 'error') {
          setError(result.error.message);
        }
        clearCart();
        setIsLoading(false);
      });
    });
  };

  return (
    <div className="flex mt-10">
      <div className="mr-auto ml-auto">
        <form>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
            <input
              type="email"
              value={email}
              onChange={onEmailChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60  p-2.5"
              placeholder="john@gmail.com"
              required
            />
          </div>
          <PaymentElement
            options={{ layout: { type: 'accordion', spacedAccordionItems: true } }}
          />
          {error && <div className="mt-3 text-red-500">{error}</div>}
          {isLoading && !error && <LoadingSpinner />}
          <Button
            label="Submit Order"
            onClick={onSubmitClick}
            disabled={isLoading}
            className="mt-10 ml-15"
          />
        </form>
      </div>
      <div className="flex fixed right-10">
        <OrderSummary lineItems={lineItems} total={total} />
      </div>
    </div>
  );
};

export default CheckoutForm;
