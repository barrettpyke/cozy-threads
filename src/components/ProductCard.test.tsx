import { screen, render } from '@testing-library/react';
import ProductCard from './ProductCard';
import { Product } from '@/types';

describe('ProductCard', () => {
  it('displays the name and price', () => {
    render(<ProductCard product={FAKE_PRODUCT} />);
    expect(screen.getByText(FAKE_PRODUCT.name)).toBeInTheDocument();
    expect(screen.getByText(FAKE_PRODUCT.price)).toBeInTheDocument();
  });
});

const FAKE_PRODUCT: Product = {
  id: 10,
  name: 'Test Item',
  description: 'Heres an item',
  price: 100,
};
