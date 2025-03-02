'use client';
import Link from 'next/link';
import { ShoppingBagIcon } from './icons';
import { useState } from 'react';
import CartModal from './CartModal';
import { usePathname } from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();
  const [showModal, setShowModal] = useState<boolean>(false);

  const onShoppingBagClick = () => {
    if (showModal) {
      setShowModal(false);
    } else {
      setShowModal(true);
    }
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <Link className="mx-auto" href="/">
          <h1 className="text-xl">Cozy Threads</h1>
        </Link>
        {pathname !== '/checkout' && (
          <button onClick={onShoppingBagClick} className="cursor-pointer">
            <ShoppingBagIcon className="mr-9" />
          </button>
        )}
      </div>
      {showModal && <CartModal onClose={onCloseModal} />}
    </>
  );
};

export default Header;
