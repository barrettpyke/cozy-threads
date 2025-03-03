import { screen, render } from '@testing-library/react';
import OrderSummary from './OrderSummary';
import { StripeCheckoutLineItem } from '@stripe/stripe-js';

describe('OrderSummary', () => {
  it('displays the lineItems and total', async () => {
    render(<OrderSummary lineItems={[FAKE_LINE_ITEM]} total={200 * 100} />);
    expect(screen.getByText('Your Order')).toBeInTheDocument();
    expect(screen.getByText('Test Item x 20')).toBeInTheDocument();
    expect(screen.getByText('$200.00')).toBeInTheDocument();
  });
});

const FAKE_LINE_ITEM: StripeCheckoutLineItem = {
  id: '123',
  name: 'Test Item',
  amountDiscount: 0,
  amountSubtotal: 0,
  amountTaxExclusive: 0,
  amountTaxInclusive: 0,
  unitAmount: 10,
  description: null,
  quantity: 20,
  discountAmounts: null,
  taxAmounts: null,
  recurring: null,
  adjustableQuantity: null,
  images: [],
};
