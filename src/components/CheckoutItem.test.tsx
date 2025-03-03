import React from 'react';
import { render, screen } from '@testing-library/react';
import CheckoutItem from './CheckoutItem';
import { formatCentsToDollars } from '../helpers/currency';

jest.mock('../helpers/currency', () => ({
  formatCentsToDollars: jest.fn(),
}));

describe('CheckoutItem', () => {
  it('renders the checkout item correctly', () => {
    const mockName = 'Test Product';
    const mockQuantity = 2;
    const mockAmountSubtotal = 5000;
    const formattedAmount = '$50.00';

    (formatCentsToDollars as jest.Mock).mockReturnValue(formattedAmount);

    render(
      <CheckoutItem
        name={mockName}
        quantity={mockQuantity}
        amountSubtotal={mockAmountSubtotal}
      />,
    );

    expect(screen.getByText(`${mockName} x ${mockQuantity}`)).toBeInTheDocument();
    expect(screen.getByText(formattedAmount)).toBeInTheDocument();
    expect(formatCentsToDollars).toHaveBeenCalledWith(mockAmountSubtotal);
  });
});
