import { Cart, CartItem } from '@/types';

export const addToCart = (item: CartItem): void => {
  const currentCart = getCartFromStorage();

  const existingIndex = currentCart.findIndex((obj) => obj.id === item.id);

  if (existingIndex !== -1) {
    currentCart[existingIndex] = {
      ...currentCart[existingIndex],
      quantity: currentCart[existingIndex].quantity + item.quantity,
    };
    sessionStorage.setItem('cart', JSON.stringify(currentCart));
  } else {
    const newCart = JSON.stringify([...currentCart, item]);

    sessionStorage.setItem('cart', newCart);
  }
};

export const removeFromCart = (id: number): void => {
  const currentCart = getCartFromStorage();

  const existingIndex = currentCart.findIndex((obj) => obj.id === id);

  if (existingIndex !== -1) {
    currentCart.splice(existingIndex, 1);
    sessionStorage.setItem('cart', JSON.stringify(currentCart));
  }
};

export const getCartFromStorage = (): Cart => {
  if (window && window.sessionStorage) {
    const currentCartStr = sessionStorage.getItem('cart');

    if (currentCartStr) {
      return JSON.parse(currentCartStr);
    }
  }
  return [];
};

export const clearCart = () => {
  console.log('here');
  sessionStorage.removeItem('cart');
};
