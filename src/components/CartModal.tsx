import { getCartFromStorage, removeFromCart } from '@/helpers/cart';
import { CloseIcon } from './icons';
import Button from './Button';
import Link from 'next/link';
import { useState } from 'react';
import { Cart } from '@/types';

type CartModalProps = {
  onClose: () => void;
};

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const [cart, setCart] = useState<Cart>(getCartFromStorage());

  const onRemoveItem = (id: number) => {
    const newCart = removeFromCart(id);
    setCart(newCart);
  };

  const onCheckoutClick = () => {
    onClose();
  };

  return (
    <div className="flex flex-col fixed right-10 min-w-xs bg-white shadow-xl py-10 px-10 border">
      <div className="flex justify-between">
        <div className="text-center ml-auto mr-auto mb-5">Your Cart</div>
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </div>
      </div>
      {cart.length ? (
        <div className="flex flex-col flex-grow justify-center items-left py-5">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <div className="cursor-pointer" onClick={() => onRemoveItem(item.id)}>
                <CloseIcon height={15} width={15} fill="#808080" />
              </div>
              <div>
                {item.name} x {item.quantity}
              </div>
              <div>${item.price * item.quantity}.00</div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center">Your cart is empty!</div>
      )}
      <Link href="/checkout" className="mr-auto ml-auto">
        <Button label="Checkout" onClick={onCheckoutClick} className="mt-5" />
      </Link>
    </div>
  );
};

export default CartModal;
