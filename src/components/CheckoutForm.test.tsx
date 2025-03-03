import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CheckoutForm from './CheckoutForm';
import { useCheckout } from '@stripe/react-stripe-js';
import { StripeCheckoutLineItem } from '@stripe/stripe-js';
import { clearCart } from '../helpers/cart';

jest.mock('@stripe/react-stripe-js', () => ({
  useCheckout: jest.fn(),
  PaymentElement: () => <div data-testid="payment-element" />,
}));

jest.mock('../helpers/cart', () => ({
  clearCart: jest.fn(),
}));

describe('CheckoutForm', () => {
  const mockLineItems: StripeCheckoutLineItem[] = [
    {
      id: '123',
      name: 'Test Item',
      amountDiscount: 0,
      amountSubtotal: 0,
      amountTaxExclusive: 0,
      amountTaxInclusive: 0,
      unitAmount: 1000,
      description: null,
      quantity: 1,
      discountAmounts: null,
      taxAmounts: null,
      recurring: null,
      adjustableQuantity: null,
      images: [],
    },
  ];

  const mockTotal = 1000;

  it('submits the order successfully', async () => {
    (useCheckout as jest.Mock).mockReturnValue({
      lineItems: mockLineItems,
      total: { total: mockTotal },
      updateEmail: jest.fn().mockResolvedValue({ type: 'success' }),
      confirm: jest.fn().mockResolvedValue({ type: 'success' }),
    });

    render(<CheckoutForm />);

    const emailInput = screen.getByRole('textbox');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.blur(emailInput);

    const submitButton = screen.getByRole('button', { name: /submit order/i });
    fireEvent.click(submitButton);

    expect(screen.getByTestId('payment-element')).toBeInTheDocument();
    expect(clearCart).toHaveBeenCalledTimes(1);
    expect(useCheckout().confirm).toHaveBeenCalledTimes(1);
  });
});
