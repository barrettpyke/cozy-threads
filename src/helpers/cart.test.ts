import { addToCart, removeFromCart, getCartFromStorage, clearCart } from './cart';
import { CartItem } from '@/types';

describe('cart functions', () => {
  const mockItem1: CartItem = {
    id: 1,
    name: 'Product A',
    description: '',
    quantity: 2,
    price: 10,
  };
  const mockItem2: CartItem = {
    id: 2,
    name: 'Product B',
    description: '',
    quantity: 1,
    price: 20,
  };
  const mockItem3: CartItem = {
    id: 1,
    name: 'Product A',
    description: '',
    quantity: 3,
    price: 10,
  };

  beforeEach(() => {
    sessionStorage.clear();
  });

  describe('addToCart', () => {
    it('should add a new item to the cart', () => {
      addToCart(mockItem1);
      const cart = getCartFromStorage();
      expect(cart).toEqual([mockItem1]);
    });

    it('should update the quantity of an existing item in the cart', () => {
      addToCart(mockItem1);
      addToCart(mockItem3);
      const cart = getCartFromStorage();
      expect(cart).toEqual([{ ...mockItem1, quantity: 5 }]);
    });
  });

  describe('removeFromCart', () => {
    it('should remove an item from the cart', () => {
      addToCart(mockItem1);
      addToCart(mockItem2);
      const updatedCart = removeFromCart(1);
      expect(updatedCart).toEqual([mockItem2]);
      expect(getCartFromStorage()).toEqual([mockItem2]);
    });

    it('should return the original cart if the item does not exist', () => {
      addToCart(mockItem1);
      const updatedCart = removeFromCart(3);
      expect(updatedCart).toEqual([mockItem1]);
      expect(getCartFromStorage()).toEqual([mockItem1]);
    });
  });

  describe('getCartFromStorage', () => {
    it('should return an empty array if the cart is empty', () => {
      const cart = getCartFromStorage();
      expect(cart).toEqual([]);
    });

    it('should return the cart from storage if it exists', () => {
      sessionStorage.setItem('cart', JSON.stringify([mockItem1]));
      const cart = getCartFromStorage();
      expect(cart).toEqual([mockItem1]);
    });
  });

  describe('clearCart', () => {
    it('should remove the cart from storage', () => {
      sessionStorage.setItem('cart', JSON.stringify([mockItem1]));
      clearCart();
      expect(sessionStorage.getItem('cart')).toBeNull();
      expect(getCartFromStorage()).toEqual([]);
    });
  });
});
