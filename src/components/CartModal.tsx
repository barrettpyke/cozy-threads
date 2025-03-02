import { getCartFromStorage, removeFromCart } from '@/helpers/cart';
import { CloseIcon, DeleteIcon } from './icons';
import Button from './Button';
import Link from 'next/link';

type CartModalProps = {
  onClose: () => void;
};

const CartModal: React.FC<CartModalProps> = ({ onClose }) => {
  const cart = getCartFromStorage();

  const onRemoveItem = (id: number, index: number) => {
    removeFromCart(id);
    cart.splice(index, 1);
    console.log(cart);
  };

  return (
    <div className="flex flex-col fixed right-10 bg-white shadow-xl py-10 px-10 border">
      <div className="flex justify-between">
        <div className="text-center ml-auto mr-auto mb-5">Your Cart</div>
        <div onClick={onClose} className="cursor-pointer">
          <CloseIcon />
        </div>
      </div>
      {cart.length ? (
        <div className="flex flex-col flex-grow justify-center items-left py-5">
          {cart.map((item, index) => (
            <div key={item.id} className="flex justify-between">
              <div onClick={() => onRemoveItem(item.id, index)}>
                <DeleteIcon />
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
      <Link href="/checkout">
        <Button label="Checkout" onClick={() => {}} className="mt-5" />
      </Link>
    </div>
  );
};

export default CartModal;
